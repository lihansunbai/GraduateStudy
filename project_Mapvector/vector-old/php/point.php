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

class point extends server {

    protected $pointid = 0;
    protected $WKT = "POINT(";
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
        $this->getpointinfo();
        $this->todatabase();
    }

    protected function todatabase() {
        $this->beginTransaction();

        $sql = 'INSERT INTO geopoint(userid,pointid,the_geom) '
                . 'VALUES($1,$2,ST_GeomFromText($3,900913));';

        $result = pg_query_params($this->_connection, $sql, array(
            $this->_request->username,
            $this->pointid,
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

    protected function getpointinfo() {
        $this->beginTransaction();

        $sql = "SELECT MAX(pointid) FROM geopoint"
                . " WHERE userid = '" . $this->_request->username . "';";

        $result = pg_query($this->_connection, $sql);

        if (!$result) {
            pg_free_result($result);
            pg_close($this->_connection);
            return;
        }

        $temppointid = pg_fetch_row($result);
        $this->pointid = $temppointid[0] + 1;

        $this->endTransaction();
    }

    //convert collected points to WKT format
    protected function toWKT() {
        parent::toWKT();
//        convert to database needed affine coordinary manual
        $tempx = (($this->_request->points[0][1][0]) * $this->transa) + $this->transb;
        $tempy = ((($this->_request->points[0][1][1]) - 1160) * $this->transc) + $this->transd;
        $this->WKT .= $tempx . " " . $tempy . ")";
    }
    
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
        $sql = "SELECT pointid,"
                . "ST_AsText(ST_Affine(geopoint.the_geom,$1,0,0,$2,$3,$4)) FROM geopoint "
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
        $tem = array(); 
        $i = 0;

        while ($row = pg_fetch_row($result)) {
            $tem = $this->toSVG($row[1]);
            $data[$i]["pointid"] = $row[0];
            $data[$i]["thegeomx"] = $tem[0];
            $data[$i]["thegeomy"] = $tem[1];
            $i++;
        }
        pg_free_result($result);

        $this->endTransaction();
        return $data;
    }
    
    //convert string to SVG format
    protected function toSVG($str) {
        $arr = array();
        $len = strlen($str);
        $str = substr($str, 6, ($len - 7));
        $delims = " ";
        $word = strtok($str, $delims);
        $arr[0] = $word;

        if ($word !== false) {
            $word = strtok($delims);
            $arr[1] = $word;
        }
        return $arr;
    }
}

?>