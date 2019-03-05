<?php

require 'connect.php';

$_POST = json_decode(file_get_contents('php://input'), true);
if(isset($_POST) && !empty($_POST)) {

  //fetching the variables through post request  
  $fname = $_POST['fname'];
  $lname = $_POST['lname'];
  $dob = $_POST['dob'];
  $email = $_POST['email'];
  $address = $_POST['address'];
  $phone = $_POST['phone'];
  $zip = $_POST['zip'];

  //SQL Statement
  $sql = "insert into user (fname, lname, dob, phone, email, address, zip) values('$fname', '$lname', '$dob', '$phone', '$email', '$address','$zip')"; 

  
    // run SQL statement
    $result = mysqli_query($con,$sql);


  // die if SQL statement failed
    if (!$result) {   
        http_response_code(404);
        die(mysqli_error($con));
        $data = false;
    }
    else
    {
        $data = true;
    }
    echo '1';
}
?>