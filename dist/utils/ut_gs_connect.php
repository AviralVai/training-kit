<?php

//include classes
include_once 'ut_gs_appdb.php';

// instantiate database connection 
$appdb = new AppDB();
$appdb->db_name = 'app';
$db = $appdb->getConnection();

?>