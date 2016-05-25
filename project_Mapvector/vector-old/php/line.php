<?php

/*
 * Here is a subclass of saving lines into database.
 * Frist use function setRequest to set patameters of datas.
 * Next use function send to send all data to database.
 * All done in send function.
 * 
 */
include_once __DIR__ . '/Server.php';
include_once __DIR__ . '/DBConnection.php';

class line extends server {

    protected $lineid = 0;
    protected $WKT = "LINESTRING(";
    protected $SVG = null;

    public function _construct() {
        parent::_construct();
    }

    public function _deconstruct() {
        parent::_deconstruct();
    }

    public function send() {
        parent::send();

        $this->_connection = getConnection();
        if (!$this->_connection) {
            $this->makeResponse(false, "can't connect to db server");
            return;
        }

        $this->toWKT();
        $this->getLineinfo();
        $this->toDatabase();
    }

    protected function toDatabase() {
        $this->beginTransaction();

        $sql = 'INSERT INTO geoline(userid,lineid,the_geom) '
                . 'VALUES($1,$2,ST_GeomFromText($3,900913));';

        $result = pg_query_params($this->_connection, $sql, array(
            $this->_request->username,
            $this->lineid,
            $this->WKT
        ));

        if (!$result) {
            $this->makeResponse(false, pg_last_error($this->_connection));
            return;
        } else {
            $this->makeResponse(true, "save line:" . $this->WKT . " ");
        }
        pg_free_result($result);

        $this->endTransaction();
    }

    protected function beginTransaction() {
        pg_query($this->_connection, "begin");
    }

    protected function endTransaction() {
        pg_query($this->_connection, "end");
    }

    protected function getLineinfo() {
        $this->beginTransaction();

        $sql = "SELECT MAX(lineid) FROM geoline"
                . " WHERE userid = '" . $this->_request->username . "';";

        $result = pg_query($this->_connection, $sql);

        if (!$result) {
            $this->makeResponse(false, pg_last_error($this->_connection));
            pg_close($this->_connection);
            return;
        }
        $templineid = pg_fetch_row($result);
        $this->lineid = $templineid[0] + 1;

        $this->endTransaction();
    }

    //this function return an array consist of line data
    public function outDatabase() {
        $this->_connection = getConnection();
        if (!$this->_connection) {
            $this->makeResponse(false, "can't connect to db server");
            return;
        }
       
        return $this->getLine();
    }

    protected function getLine() {
        $this->beginTransaction();
        
//        SQL base on postgresql and postgis ,which use ST_Affine to convert coordinary
//        and ST_AsText to output WKT format string.
        $sql = "SELECT lineid,"
                . "ST_AsText(ST_Affine(geoline.the_geom,$1,0,0,$2,$3,$4)) FROM geoline "
                . "WHERE userid = $5;";
        
        $result = pg_query_params($this->_connection, $sql, array(
            (1 / $this->transa),
            (1 / $this->transc),
            ((-1) * ($this->transb / $this->transa)),
            ((-1) * ($this->transd / $this->transc) + 1160),
            $this->_request->username
        ));

        if (!$result) {
            $this->makeResponse(false, pg_last_error($this->_connection));
            pg_close($this->_connection);
            return false;
        }

        $data = array();
        $i = 0;

        while ($row = pg_fetch_row($result)) {
            $data[$i]["lineid"] = $row[0];
            $data[$i]["thegeom"] = $this->toSVG($row[1]);
            $i++;
        }
        pg_free_result($result);

        $this->endTransaction();
        return $data;
    }

    //convert collected points to WKT format
    protected function toWKT() {
        parent::toWKT();
//        convert to database needed affine coordinary manual
        for ($i = 0; $i < $this->_request->num; $i++) {
            $tempx = (($this->_request->line[$i][1][0]) * $this->transa) + $this->transb;
            $tempy = ((($this->_request->line[$i][1][1]) - 1160) * $this->transc) + $this->transd;
            $this->WKT .= $tempx . " " . $tempy;
            //format contral "xxxxx xxxxx,xxxxx xxxxx"
            if ($i != $this->_request->num - 1) {
                $this->WKT .=",";
            }
        }
        $this->WKT.=")";
    }

    //convert string to SVG format
    protected function toSVG($str) {
        $len = strlen($str);
        $str = substr($str, 11, ($len - 12));
        $delims = ",";
        $word = strtok($str, $delims);

        while ($word !== false) {
            $temp = str_replace(" ", ",", $word);
            $tempstr .= $temp . " ";
            $word = strtok($delims);
        }
        return $tempstr;
    }

}

?>