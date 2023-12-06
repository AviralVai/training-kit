<?php  
      // create database connectivity  
      include_once '../objects/ob_fw_contact.php';
      include_once '../dist/utils/ut_gs_connect.php'; 
      
//       if (isset($_POST['deleteId'])) {  
//            $deleteId = $_POST['deleteId'];  
//       }  
//       // check record exists  
//       $sql = "SELECT * FROM fw_employee WHERE emp_id = {$deleteId}";  
//       $result = $conn->query($sql);  
//       if ($result->num_rows > 0) {  
//            // Delete record from users table  
//            $query = "DELETE FROM fw_employee WHERE emp_id = {$deleteId}";  
//            if ($conn->query($query)) {  
//                 echo 1;  
//                 exit;  
//            }else{  
//                 echo 0;  
//                 exit;  
//            }  
//       }  
//  



    
   
      if (isset($_POST['emp_id'])) {
        
        $id = $_POST['emp_id'];
        
        echo("bolo");
        try {
            
            $sql = 
            "
            DELETE FROM fw_employee
            
            WHERE
                emp_id = ?
            ";
            
            $prepareTest = $pdo->prepare($sql);
            $prepareTest->execute([$emp_id]);
            
        } catch(PDOException $e) {
            
            file_put_contents('../error/e.txt', $e->getMessage(), FILE_APPEND);
            
        }
        
    
    }
else{
    echo("hello");
}



?>