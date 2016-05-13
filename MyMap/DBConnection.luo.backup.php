<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$HOST = "127.0.0.1";
$PORT = 5432;
$DBNAME = "testvector";
$USER = "postgres";
$PASSWORD = "postgres";

function  getConnection(){
    global $HOST,$PORT,$DBNAME,$USER,$PASSWORD;
    $connstr = "host={$HOST} port={$PORT} dbname={$DBNAME} user={$USER} password={$PASSWORD}";
    $conn = pg_connect($connstr);
    return $conn;
}
