<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

include_once __DIR__ . '/Server.php';
include_once __DIR__ . '/DBConnection.php';

class Regist extends server {

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

		if ($this->_request->type === "REGIST_LOGIN") {
			$this->regist();
		} 
		pg_close($this->_connection);
	}

	protected function beginTransaction() {
		pg_query($this->_connection, "begin");
	}

	protected function endTransaction() {
		pg_query($this->_connection, "end");
	}

	protected function regist() {
		$this->beginTransaction();
                $data = array();
                
                $nameforuser = $this->_request->user->username;
                
                if ($nameforuser == 0){
                    $this->makeResponse(false, "请输入用户名");
                    return;
                } elseif(!(strlen($nameforuser) >= 5 && strlen($nameforuser) <= 16)){
                     $this->makeResponse(false, "用户名长度为5-16位");  
                    return;
                } elseif($this->_request->user->password == 0){
                     $this->makeResponse(false, "请输入密码");
                    return;
                }
		$sql1 = "insert into map_user(username,password,realname) values ($1,md5($3),$2)";
                $sql2 = "select username from map_user where username = $1";
                
                $result2 = pg_query_params($this->_connection, $sql2, array(
			$this->_request->user->username
		));
                
                if (pg_num_rows($result2) > 0) {
			$this->makeResponse(FALSE, "已存在该用户名");
                        return;
                }
                
		$result1 = pg_query_params($this->_connection, $sql1, array(
			$this->_request->user->username,
                        $this->_request->user->realname,
			$this->_request->user->password
		));
                
                $cmdtuples = pg_affected_rows($result1);
                
		if ($cmdtuples >0) {
                        $this->_response["data"] = array();
                        $this->_response["data"][0] = $this->_request->user->username;
			$this->makeResponse(true, "ok");
		}else {
                    $this->makeResponse(false, "已存在该用户名！");
                    return;
		}
		pg_free_result($result1);
                pg_free_result($result2);
		$this->endTransaction();
	}
}