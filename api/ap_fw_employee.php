<?php

//application initialization files inclusion
include_once "../dist/utils/ut_gs_init.php";
include_once '../objects/ob_fw_employee.php';

//initialize class object
$employee = new Employee($db);

//read parameter value from url
$id = isset($_GET['id']) ? strtoupper($_GET['id']) : 0;
$rcode = isset($_GET['rcode']) ? strtoupper($_GET['rcode']) : 'X';

//set public class variables 
$employee->id = $id;
$employee->role_code = $rcode;

//call database routine
$stmt = $employee->read();
//total number of records returing by query 
$num = $stmt->rowCount();  

//if query has record set, read and store into php array to read by jquery.
if($num>0){
  $employee_arr=array();
  $employee_arr['records']=array();
  // retrieve our table contents
  // fetch() is faster than fetchAll()
  // http://stackoverflow.com/questions/2770630/pdofetchall-vs-pdofetch-in-a-loop
  while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
    // extract row
    extract($row);
    $employee_item=array(
        'emp_id' => $emp_id,
        'role_id' => $role_id,
        'emp_name' => $emp_name,
        'email' => $email,
        'phone' => $phone,
        'role_code' => $role_code,
        'role' => ($mix_case == 'Y')?ucfirst(strtolower($role)):$role,
        'doj' => $doj,
        'salary' => $salary,
      );
    array_push($employee_arr['records'], $employee_item);
  }
  //closing records fetching query  
  $stmt->closeCursor();
}

//Return status message to caller
message_read($num, $employee_arr);  
  



