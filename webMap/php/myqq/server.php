<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<?php

include_once __DIR__.'/php/Server.php';
include_once __DIR__.'/php/UserServer.php';
include_once __DIR__.'/php/DBConnection.php';

//<--This if just for discern use type server.php to login.not for check the number and password
if(!isset($_REQUEST["params"])){
    $response = array();
    $response["success"] = false;
    $response["errmsg"] = "fatal error!!! with incorrect parameter!";
    echo json_encode($response);
    exit(1);
}

$params = json_decode($_REQUEST["params"]);
$typearr = split("_", $params->type);

//<--here set a login server with null avoiding to set database connection twice-->
$sv = null;
if($typearr[0] === "USER"){
    $sv = new UserServer();
}  else {
    $response = array();
    $response["success"] = false;
    $response["errmsg"] = "fatal error!!! with unknow requset type!";
    exit(1);
}

$sv->setRequest($params);

$sv->run();

echo json_encode($sv->getRespose());
?>