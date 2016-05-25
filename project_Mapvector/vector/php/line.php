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

        $this->getLineinfo();
        $this->toDatabase();
    }

    protected function toDatabase() {
        $this->beginTransaction();


        $sql = 'INSERT INTO line(userid,lineid,lpointid,x,y,flag)
                VALUES($1,$2,$3,$4,$5,$6);';

        /*
         * 
         * Please reference JavaScript files to know the structure of POINTS arrary.
         * The last patameter FLAG is a flag cursoring the begin or the end of line.
         * You should discren the points whether a start or an end.
         * 
         * !!!!!
         * diyige canshu haimeixie yao zhidin meiyitiaoxian de bianhao
         *
         * Here is the base sql operation.
         * Save and back up.
          $result = pg_query_params($this->_connection, $sql, array(
          $this->_request->line[0][0],
          $this->_request->line[0][1][0],
          $this->_request->line[0][1][1],
          $this->_request->line[0][0] == 0 ? TRUE : FALSE || $this->_request->line[0][0] == $this->_request->num ? TRUE : FALSE
          ));
          echo "end reslut ";
          echo $this->_request->line[0][0]." ";
          echo $this->_request->line[0][1][0]." ";
          echo $this->_request->line[0][1][1]." ";
          echo $this->_request->line[0][0] == 0 ? TRUE : FALSE || $this->_request->line[0][0] == $this->_request->num ? TRUE : FALSE;

          if (!$result) {
          $this->_response["success"] = false;
          $this->_response["errmsg"] = pg_last_error($this->_connection);
          return;
          } else {
          $this->makeResponse(true, "save line");
          }
          pg_free_result($result);
         * 
         */
//        
        for ($i = 0; $i < $this->_request->num; $i++) {
            $result = pg_query_params($this->_connection, $sql, array(
                $this->_request->username,
                $this->lineid,
                $this->_request->line[$i][0],
                $this->_request->line[$i][1][0],
                $this->_request->line[$i][1][1],
                //BAZZINGA!!!
                //THIS IS A BIG MONSTER!!!
                //I REALLY REALLY NOT SURE WHAT I HAVE DONE.
                /*
                 * THIS DISCREN THE START OF LINE.
                 * $this->_request->line[$i][0] == 0 ? 1 : 0 
                 * 
                 * THIS DISCREN THE END OF LINE.
                 * $this->_request->line[$i][0] === (($this->_request->num) - 1)
                 * AND HERE $this->_request->num SHOULD BE DINIMISHED 1
                 * BEACUSE OF THE ARRAY SAVEING POINTS FROM ZERO.
                 * 
                 * THIS TWO SENTENSES ALL RETURN TRUE, MAKE SURE POINTS IS START OR END.
                 * 
                 * FINALLY RETURN true OR false TO DATABASE.
                 */
                ($this->_request->line[$i][0] == 0 ? 1 : 0 || $this->_request->line[$i][0] === (($this->_request->num) - 1) ? 1 : 0) == 1 ? "TRUE" : "FALSE"
            ));

            if (!$result) {
                $this->_response["success"] = false;
                $this->_response["errmsg"] = pg_last_error($this->_connection);
                return;
            } else {

                $this->makeResponse(true, "save line:" . $i . " ");
            }
            pg_free_result($result);
        }

        $this->_response["data"] = $this->_request;
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

        $sql = "SELECT MAX(lineid) FROM line"
                . " WHERE userid = '" . $this->_request->username . "';";

        $result = pg_query($this->_connection, $sql);

        if (!$result) {
            pg_close($this->_connection);
            return;
        }
        $templineid = pg_fetch_row($result);

        if ($templineid[0] == NULL) {
            $this->lineid = 1;
        }
        $this->lineid = $templineid[0] + 1;

        $this->endTransaction();
    }

    public function outDatabase() {
        $this->_connection = getConnection();
        if (!$this->_connection) {
            $this->_response["success"] = false;
            $this->_response["errmsg"] = "can't connect to db server";
            return;
        }

        if ($this->getLine()) {
            $this->getLineNumber();
        }
        return;
    }

    protected function getLine() {
        $this->beginTransaction();

        $sql = "SELECT lineid,lpointid,x,y,flag FROM line WHERE userid = '"
                . $this->_request->username . "';";
        

        $result = pg_query($this->_connection, $sql);

        if (!$result) {
            $this->makeResponse(false, pg_last_error($this->_connection));
            pg_close($this->_connection);
            return false;
        }

        $data = array();
        $i = 0;

        while ($row = pg_fetch_row($result)) {
            $data[$i]["lineid"] = $row[0];
            $data[$i]["lpointid"] = $row[1];
            $data[$i]["x"] = $row[2];
            $data[$i]["y"] = $row[3];
            $data[$i]["flag"] = $row[4];
            $i++;
        }
        pg_free_result($result);

        $this->makeResponse(true, "Point get!");
        $this->_response["linedata"] = $data;

        $this->endTransaction();
        return $this->_response;
    }

    protected function getLineNumber() {
        $this->beginTransaction();

        $sql = "SELECT lineid,COUNT(lpointid) "
                . "FROM line "
                . "WHERE userid = '" . $this->_request->username . "' "
                . "GROUP BY lineid "
                . "ORDER BY lineid;";

        $result = pg_query($this->_connection, $sql);

        if (!$result) {
            $this->makeResponse(false, pg_last_error($this->_connection));
            pg_close($this->_connection);
            return false;
        }

        $data = array();
        $i = 0;

        while ($row = pg_fetch_row($result)) {
            $data[$i]["lineid"] = $row[0];
            $data[$i]["pointnum"] = $row[1];
            $i++;
        }
        pg_free_result($result);

        $this->makeResponse(true, "Point get!");
        $this->_response["linenumdata"] = $data;

        $this->endTransaction();
        return $this->_response;
    }

}

?>