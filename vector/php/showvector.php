<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

include_once __DIR__ . '/Server.php';
include_once __DIR__ . '/DBConnection.php';
include_once __DIR__ . '/line.php';
include_once __DIR__ . '/point.php';
include_once __DIR__ . '/polygon.php';

class showvector extends server {

    protected $line;
    protected $point;
    protected $polygon;
    protected $params;

    public function _construct($params) {
        parent::_construct();
        $this->line = new line();
        $this->point = new point();
        $this->polygon = new polygon();
        $this->params = $params;
    }

    public function _deconstruct() {
        parent::_deconstruct();
    }

    public function send() {
        parent::send();
        $this->getLine();
        $this->getpoint();
        $this->getPolygon();       
    }
    
    protected function getLine(){
        $this->line->setRequest($this->params);
        $data = $this->line->outDatabase();
        $this->makeResponse(true, "line get!");
        $this->_response["linedata"] = $data;
    }
    
    protected function getPoint(){
        $this->point->setRequest($this->params);
        $data = $this->point->outDatabase();
        $this->makeResponse(true, "point get!");
        $this->_response["pointdata"] = $data;
    }
    
    protected function getPolygon(){
        $this->polygon->setRequest($this->params);
        $data = $this->polygon->outDatabase();
        $this->makeResponse(true, "polygon get!");
        $this->_response["polygondata"] = $data;
    }
    

}

?>
