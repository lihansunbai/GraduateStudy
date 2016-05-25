<?php

include_once __DIR__.'/DBConnection.php';

class Server {

    protected $_connection = false;
    protected $_request = false;
    protected $_response = false;
    
    public function __construct() {
        $this->_response = array();
        $this->_response["success"] = false;
        $this->_response["errmsg"] = "不明错误";

        
    }
    
    
    public function __destruct() {

    }
    
    
    public function setRequest($params){
        $this->_request = $params; 
    }
    
    
    public function getResponse(){
        return $this->_response;
    }
    
    public function run(){

    }
    
    protected function makeResponse($succ,$msg){
        $this->_response["success"] = $succ;
        $this->_response["errmsg"] = $msg;
    }
}

?>
