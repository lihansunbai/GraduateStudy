<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
include_once __DIR__ . '/Server.php';
include_once __DIR__ . '/DBConnection.php';

class LoginConnection extends server {

	public function _construct() {
		parent::_construct();
	}

	public function _destruct() {
		parent::_destruct();
	}

	public function run() {
		parent::run();
		$this->_connection = getConnection();
                
		if (!$this->_connection) {
			$this->_response["success"] = false;
			$this->_response["errmsg"] = "can't connect to db server";
			return;
		}

		if ($this->_request->type === "USER_LOGIN") {
			$this->login();
		} 
		pg_close($this->_connection);
	}

	protected function beginTransaction() {
		pg_query($this->_connection, "begin");
	}

	protected function endTransaction() {
		pg_query($this->_connection, "end");
	}

	protected function login() {
		$this->beginTransaction();
                $data = array();
                
		$sql = "select username from map_user where username=$1 and password=md5($2)";
		$result = pg_query_params($this->_connection, $sql, array(
			$this->_request->user->username,
			$this->_request->user->password
		));
		if (!$result) {
			$this->_response["success"] = false;
			$this->_response["errmsg"] = pg_last_error($this->_connection);
			return;
		}
		if (pg_num_rows($result) > 0) {
			$this->makeResponse(true, "ok");
			$row = pg_fetch_row($result);
                        $data[0]["username"] = $row[0];
			$_SESSION["userid"] = $row[0];
		} else {
			$this->makeResponse(false, "无效的用户名或密码");
		}
                
                $this->_response["data"] = $data;
		pg_free_result($result);
		$this->endTransaction();
	}
}