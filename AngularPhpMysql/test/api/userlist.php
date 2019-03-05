<?php

require 'connect.php';
    
$user = [];
$sql = "SELECT * FROM user";

if($result = mysqli_query($con,$sql))
{
  $cr = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $user[$cr]['id']    = $row['id'];
    $user[$cr]['name'] = $row['fname'].' '.$row['lname'];
    $user[$cr]['phone'] = $row['phone'];
    $user[$cr]['dob'] = $row['dob'];
    $user[$cr]['email'] = $row['email'];
    $user[$cr]['address'] = $row['address'];
    $user[$cr]['zip'] = $row['zip'];
    $cr++;
  }
    
  echo json_encode($user);
}
else
{
  http_response_code(404);
}

?>