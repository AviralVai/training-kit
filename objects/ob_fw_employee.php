<?php

include_once '../dist/utils/ut_gs_connect.php';  
  
class Employee{
 
  //local variables 
  private $conn;

  //class property variables
  public $id;
  public $role_code;

  //create PDO instance for a database connection 
  public function __construct($db){
      $this->conn = $db;
  }

  //database routine handler for query operation
  function read(){

    //calling database routine (stored procedure/function)
    $query = "CALL pr_fw_employee
                ( :pi_emp_id
                , :pi_role_code
                );";

    //prepare for exeuction of database routine
    $stmt = $this->conn->prepare( $query );

    //bind input/output parameters for database routine
    $stmt->bindParam(':pi_emp_id', $this->id, PDO::PARAM_INT, 32);
    $stmt->bindParam(':pi_role_code', $this->role_code, PDO::PARAM_STR, 1);    
    
    //execute database routine
    $stmt->execute();

    //return execution status (true/false) to caller 
    return $stmt;

  }

}
?>