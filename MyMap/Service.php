<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
include_once __DIR__ . '/php/Server.php';
include_once __DIR__ . '/php/LoginConnection.php';
include_once __DIR__ . '/php/Regist.php';
include_once __DIR__ . '/php/line.php';
include_once __DIR__ . '/php/point.php';
include_once __DIR__ . '/php/polygon.php';
include_once __DIR__ . '/php/showvector.php';


session_start();

if (!isset($_REQUEST["params"])) {
    $response = array();
    $response["success"] = false;
    $response["errmsg"] = "请设置请求参数！";
    echo json_encode($response);
    exit(1);
}

$params = json_decode($_REQUEST["params"]);
$typearr = split("_", $params->type);



$sv = new Server();
if ($typearr[0] === "USER") {
    $sv = new LoginConnection(); 
    echo "here";
} else if ($typearr[0] === "LINE") {
    $sv = new line();
} else if ($typearr[0] === "POLYGON") {
    $sv = new polygon();
} else if ($typearr[0] === "POINT") {
    $sv = new point();
} else if ($typearr[0] === "SHOW") {
    if ($_SESSION["userid"] == null) {
        return;
    }
    $sv = new showvector();
    $sv->_construct($params);
} else if ($typearr[0] === "REGIST") {
    $sv = new Regist();
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