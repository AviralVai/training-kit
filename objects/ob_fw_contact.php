<?php

include_once '../dist/utils/ut_gs_connect.php';  

class Catalog{
 
  //local variables 
  private $conn;

  //class property variables
  public $user_id;
  public $emp_id;
  public $emp_name;
  public $email;
  public $phone;
  public $role_code;
  public $doj;
  public $salary;  
  public $oper;

  //create PDO instance for a database connection 
  public function __construct($db){
      $this->conn = $db;
  }

  //database routine handler for query operation (read/write)
  function write(){

    //calling database routine (stored procedure/function)
    $query = "CALL pr_fw_contact
                ( :pi_user_id
                , :pi_emp_id
                , :pi_emp_name
                , :pi_email
                , :pi_phone
                , :pi_role_code
                , :pi_doj
                , :pi_salary
                , :pi_oper
                )";

    //prepare for exeuction of database routine
    $stmt = $this->conn->prepare( $query );

    //bind input/output parameters for database routine
    $stmt->bindParam(':pi_user_id', $this->user_id, PDO::PARAM_INT, 32);
    $stmt->bindParam(':pi_emp_id', $this->emp_id, PDO::PARAM_INT, 32);    
    $stmt->bindParam(':pi_emp_name', $this->emp_name, PDO::PARAM_STR, 64);
    $stmt->bindParam(':pi_email', $this->email, PDO::PARAM_STR, 64);
    $stmt->bindParam(':pi_phone', $this->phone, PDO::PARAM_STR, 16);
    $stmt->bindParam(':pi_role_code', $this->role_code, PDO::PARAM_STR, 16);
    $stmt->bindParam(':pi_doj', $this->doj, PDO::PARAM_STR, 16);
    $stmt->bindParam(':pi_salary', $this->salary, PDO::PARAM_STR, 12);
    $stmt->bindParam(':pi_oper', $this->oper, PDO::PARAM_STR, 1);

    //execute database routine
    $stmt->execute();

    //return execution status (true/false) to caller 
    return $stmt;

  }

}  