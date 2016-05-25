<?php

include_once __DIR__ . '/php/Server.php';
include_once __DIR__ . '/php/UserServer.php';

session_start();

if (!isset($_REQUEST["params"])) {
	$response = array();
	$response["success"] = false;
	$response["errmsg"] = "小伙，你没有设置好请求参数！";
	echo json_encode($response);
	exit(1);
}

$params = json_decode($_REQUEST["params"]);
$typearr = split("_", $params->type);


$sv = new Server();
if ($typearr[0] === "USER") {
	$sv = new UserServer();
} else {
	$response = array();
	$response["success"] = false;
	$response["errmsg"] = "无效的请求类型";
	echo json_encode($response);
	exit(1);
}


$sv->setRequest($params);
$sv->run();
echo json_encode($sv->getResponse());
?>
