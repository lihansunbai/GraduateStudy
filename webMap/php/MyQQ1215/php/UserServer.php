<?php

include_once __DIR__ . '/Server.php';

class UserServer extends Server {

	public function __construct() {
		parent::__construct();
	}

	public function __destruct() {
		parent::__destruct();
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
		} if ($this->_request->type === "USER_GET_FRIENDS") {
			$this->getFriends();
		} else {
			
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

		$sql = "select id from qq_user where username=$1 and password=md5($2)";
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
			$_SESSION["userid"] = $row[0];
		} else {
			$this->makeResponse(false, "无效的用户名或密码");
		}
		pg_free_result($result);
		$this->endTransaction();
	}

	protected function getFriends() {
		$this->beginTransaction();
		$sql = "	"
				. " select "
				. "	A.userid," . "	A.friendid,"
				. "	B.realname "
				. " from "
				. "	qq_friend A, "
				. "	qq_user B "
				. " where "
				. "	A.userid=$1 "
				. "	and "
				. "	A.friendid= B.id";

		$result = pg_query_params($this->_connection,$sql,array(
			$_SESSION["userid"]
		));
		if(!$result){
			$this->makeResponse(FALSE, pg_last_error($this->_connection));
			pg_close($this->_connection);
			return;
		}
		
		$data = array();
		$i = 0;
		while($row = pg_fetch_row($result)){
			$data[$i]["friendid"] = $row[1];
			$data[$i]["realname"] = $row[2];
			$i ++;
		}
		pg_free_result($result);
		$this->makeResponse(true, "ok");
		$this->_response["data"] = $data;
			
		$this->endTransaction();
	}

}

?>
