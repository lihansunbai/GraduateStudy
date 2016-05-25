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
        $this->getpolygoninfo();

        $this->todatabase();
    }

    protected function todatabase() {
        $this->beginTransaction();

        $sql = 'INSERT INTO polygon(userid,polygonid,ppointid,x,y)
                VALUES($1,$2,$3,$4,$5);';

        for ($i = 0; $i < $this->_request->num; $i++) {
            $result = pg_query_params($this->_connection, $sql, array(
                $this->_request->username,
                $this->polygonid,
                $this->_request->polygon[$i][0],
                $this->_request->polygon[$i][1][0],
                $this->_request->polygon[$i][1][1]
            ));

            if (!$result) {
                $this->_response["success"] = false;
                $this->_response["errmsg"] = pg_last_error($this->_connection);
                return;
            } else {
                $this->makeResponse(true, "save polygon:" . $i . " ");
            }
            pg_free_result($result);
        }

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

        $sql = "SELECT MAX(polygonid) FROM polygon"
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

}

?>