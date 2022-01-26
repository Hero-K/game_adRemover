<?php
require "dbconfig.php";


function connect($servername, $db, $username, $password){

  $dsn = "mysql:host=$servername;dbname=$db;charset=UTF8";
  
  try {
    $options = [PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION];
  
    return new PDO($dsn, $username, $password, $options);
  
  } catch(PDOException $e) {
    echo $e->getMessage();
  }
}

return connect($servername, $db, $username, $password);