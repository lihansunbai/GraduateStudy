<?php

/*
 * Here is a subclass of saving polygon into database.
 * Frist use function setRequest to set patameters of datas.
 * Next use function send to send all data to database.
 * All done in send function.
 * 
 */
include_once __DIR__ . '/Server.php';
include_once __DIR__ . '/DBConnection.php';

class polygon extends server {

    protected $polygonid = 0;
    protected $WKT = 'POLYGON((';
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
            $this->_response["success"] = false;
            $this->_response["errmsg"] = "can't connect to db server";
            return;
        }
        
        $this->toWKT();
        $this->getpolygoninfo();
        $this->todatabase();
    }

    protected function todatabase() {
        $this->beginTransaction();

        $sql = 'INSERT INTO geopolygon(userid,polygonid,the_geom) '
                . 'VALUES($1,$2,ST_GeomFromText($3,900913));';

        $result = pg_query_params($this->_connection, $sql, array(
            $this->_request->username,
            $this->polygonid,
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

    protected function getpolygoninfo() {
        $this->beginTransaction();

        $sql = "SELECT MAX(polygonid) FROM geopolygon"
                . " WHERE userid = '" . $this->_request->username . "';";

        $result = pg_query($this->_connection, $sql);

        if (!$result) {
            pg_free_result($result);
            pg_close($this->_connection);
            return;
        }

        $temppolygonid = pg_fetch_row($result);

        $this->polygonid = $temppolygonid[0] + 1;

        $this->endTransaction();
    }
    
    public function outDatabase() {
        $this->_connection = getConnection();
        if (!$this->_connection) {
            $this->makeResponse(false, "can't connect to db server");
            return;
        }
       
        return $this->getPolygon();
    }
    
    protected function getPolygon() {
        $this->beginTransaction();
        
//        SQL base on postgresql and postgis ,which use ST_Affine to convert coordinary
//        and ST_AsText to output WKT format string.
        $sql = "SELECT polygonid,"
                . "ST_AsText(ST_Affine(geopolygon.the_geom,$1,0,0,$2,$3,$4)) FROM geopolygon "
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
            $data[$i]["polygonid"] = $row[0];
            $data[$i]["thegeom"] = $this->toSVG($row[1]);
            $i++;
        }
        pg_free_result($result);

        $this->endTransaction();
        return $data;
    }
    
    protected function toWKT() {
        parent::toWKT();
//        convert to database needed affine coordinary manual
        for ($i = 0; $i < $this->_request->num; $i++) {
            $tempx = (($this->_request->polygon[$i][1][0]) * $this->transa) + $this->transb;
            $tempy = ((($this->_request->polygon[$i][1][1]) - 1160) * $this->transc) + $this->transd;
            $this->WKT .= $tempx . " " . $tempy.",";
            }
        
        //polygon need an end same as begin point
        $tempx = (($this->_request->polygon[0][1][0]) * $this->transa) + $this->transb;
        $tempy = ((($this->_request->polygon[0][1][1]) - 1160) * $this->transc) + $this->transd;
        $this->WKT .= $tempx . " " . $tempy."))";
        echo $this->WKT;
    }

    protected function toSVG($str) {
        $len = strlen($str);
        $str = substr($str, 9, ($len - 11));
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