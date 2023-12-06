<?php

include_once '../dist/utils/ut_gs_connect.php';  
  
class RoleLable{
 
  //local variables 
  private $conn;

  //class property variables
  //public $sub_unit_id;

  //create PDO instance for a database connection 
  public function __construct($db){
      $this->conn = $db;
  }

  //database routine handler for query operation
  function read(){

    //calling database routine (stored procedure/function)
    $query = "CALL pr_fw_role_label();";

    //prepare for exeuction of database routine
    $stmt = $this->conn->prepare( $query );

    //bind input/output parameters for database routine
    //$stmt->bindParam(':pi_sub_unit_id', $this->sub_unit_id, PDO::PARAM_INT, 32);
    
    //execute database routine
    $stmt->execute();

    //return execution status (true/false) to caller 
    return $stmt;

  }

}
?>