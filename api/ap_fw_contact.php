<?php

//application initialization files inclusion
include_once "../dist/utils/ut_gs_init.php";
include_once '../objects/ob_fw_contact.php';

//initialize class object
$catalog = new Catalog($db);

//set public class variables 

//read json data posted by ajax call
$data = json_decode(file_get_contents("php://input"));

//set public class variables 
$catalog->user_id = $user_id;
$catalog->emp_id = $data->id;
$catalog->emp_name = $data->emp_name;
$catalog->email = $data->email;
$catalog->phone = $data->phone;
$catalog->role_code = $data->role_code;
$catalog->doj = $data->doj;
$catalog->salary = $data->salary;
$catalog->oper = $data->oper;

//call database routine
$stmt = $catalog->write();
message_write($stmt, $data->oper);  
  
?> 