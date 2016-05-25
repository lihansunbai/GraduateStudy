<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$str = "POLYGON((-71.1776585052917 42.3902909739571,-71.1776820268866 42.3903701743239,-71.1776063012595 42.3903825660754,-71.1775826583081 42.3903033653531,-71.1776585052917 42.3902909739571))";


$len = strlen($str);
$str = substr($str, 9, ($len - 11));
$delims = ",";
$word = strtok($str, $delims);

while ($word !== false) {
    $temp = str_replace(" ", ",", $word);
    $tempstr .= $temp . " ";
    $word = strtok($delims);
}
echo $tempstr;
?>