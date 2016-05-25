<?php

include_once __DIR__ . '/php/Server.php';
include_once __DIR__ . '/php/line.php';
include_once __DIR__ . '/php/point.php';
include_once __DIR__ . '/php/polygon.php';
include_once __DIR__ . '/php/showvector.php';

session_start();

if (!isset($_REQUEST["params"])) {
    $response = array();
    $response["success"] = false;
    $response["errmsg"] = "error:you CAN NOT DO THIS!!!";
    echo json_encode($response);
    exit(1);
}

$params = json_decode($_REQUEST["params"]);
$typearr = split("_", $params->type);

$sv = new server();


if ($typearr[0] === "LINE") {
    $sv = new line();   
} else if ($typearr[0] === "POLYGON") {
    $sv = new polygon();
} else if ($typearr[0] === "POINT") {
    $sv = new point();
} elseif ($typearr[0] === "SHOW") {
    $sv = new showvector();
    $sv->_construct($params);
} else {
    $response = array();
    $response["success"] = false;
    $response["errmsg"] = "error: invalide quest";
    echo json_encode($response);
    exit(1);
}

$sv->setRequest($params);
$sv->send();
echo json_encode($sv->getResponse());
?>