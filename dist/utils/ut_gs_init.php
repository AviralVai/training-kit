<?php

  //application initialization files inclusion
  include_once "ut_gs_config.php";
  include_once "ut_gs_message.php";
/*
  global $t_logged_in, $t_user_id, $t_agent_id, $t_user_fname, $t_user_lname, $t_user_name, $t_role_id, $t_role_code, $t_sub_unit_id;
  
  $logged_in = $t_logged_in;
  $user_id = $t_user_id;
  $agent_id = $t_agent_id;
  $user_fname = $t_user_fname;
  $user_lname = $t_user_lname;
  $user_name = $t_user_name;  
  $role_id = $t_role_id;
  $role_code = $t_role_code;
  $sub_unit_id = $t_sub_unit_id;
*/

  $logged_in = 'N';
  $user_id = 1;
  $agent_id = 1;
  $role_id = 7;
  $user_fname = 'Ram';
  $user_lname = 'Nihor';
  $user_name = 'Ram Nihor';  
  $role_code = 'AGT';
  $lastlogin = date("d-m-Y h:m:s");  
  $sub_unit_id = 0;


 