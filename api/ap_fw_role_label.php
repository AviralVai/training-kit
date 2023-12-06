<?php

//application initialization files inclusion
include_once "../dist/utils/ut_gs_init.php";
include_once '../objects/ob_fw_roleLable.php';

//initialize class object
$roleLable = new RoleLable($db);

//read parameter value from url
//$type = isset($_GET['type']) ? strtoupper($_GET['type']) : 'X';

//set public class variables 
//$catalog->user_id = $user_id;

//call database routine
$stmt = $roleLable->read();
//total number of records returing by query 
$num = $stmt->rowCount();  

//if query has record set, read and store into php array to read by jquery.
if($num>0){
  $roleLable_arr=array();
  $roleLable_arr['records']=array();
  // retrieve our table contents
  // fetch() is faster than fetchAll()
  // http://stackoverflow.com/questions/2770630/pdofetchall-vs-pdofetch-in-a-loop
  while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
    // extract row
    extract($row);
    $roleLable_item=array(
        'role_id' => $role_id,
        'role_code' => $role_code,
        'role_name' => ($mix_case == 'Y')?ucfirst(strtolower($role_name)):$role_name,
        'role_count' => $role_count,
      );
    array_push($roleLable_arr['records'], $roleLable_item);
  }
  //closing records fetching query  
  $stmt->closeCursor();
}

//Return status message to caller
message_read($num, $roleLable_arr);  
  



