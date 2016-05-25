<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

include_once __DIR__ . '/DBConnection.php';

class server {

    protected $_connection = false;
    protected $_request = false;
    protected $_response = false;
    
    protected $transa = 0.298582142;
    protected $transb = 12572466.0204812;
    protected $transc = 0.298582142;
    protected $transd = 3267645.93504008;

    public function _construct() {
        $this->_response = array();
        $this->_response["success"] = false;
        $this->_response["errmsg"] = "error:unknow massage.";
    }

    public function _deconstruct() {
        
    }

    public function setRequest($param) {
        $this->_request = $param;
    }

    public function getResponse() {
        return $this->_response;
    }

    public function send() {
        
    }

    protected function makeResponse($succ, $msg) {
        $this->_response["success"] = $succ;
        $this->_response["errmsg"] = $msg;
    }
    
    protected function toWKT(){
        
    }

}

?>
