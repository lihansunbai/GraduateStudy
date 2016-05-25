<?php


$HOST = "127.0.0.1";
$PORT = 5432;
$DBNAME = "qq";
$USER = "postgres";
$PASSWORD = "123456";


function  getConnection(){
    global $HOST,$PORT,$DBNAME,$USER,$PASSWORD;
    $connstr = "host={$HOST} port={$PORT} dbname={$DBNAME} user={$USER} password={$PASSWORD}";
    $conn = pg_connect($connstr);
    return $conn;
}


?>
