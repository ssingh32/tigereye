<?php

include_once("tigereyeDB.php");

if(isset($_POST['u_name'])
    && isset($_POST['u_email'])
    && isset($_POST['pass'])
    && isset($_POST['pass2'])
    && !empty($_POST['u_name'])
    && !empty($_POST['u_email'])
    && !empty($_POST['pass'])
    && !empty($_POST['pass2'])
){



    $fields = "Name,Email,Password";


    $values = "'".$_POST['u_name']."','".$_POST['u_email']."','".$_POST['pass']."'";

    echo $values;
    echo "\r\n;";

    $sql = "INSERT INTO Users(".$fields.") VALUES(".$values.")";
    $query = $tigereyeDB->prepare($sql);

    // echo "\r\n;";
    // echo $sql;
    // echo "\r\n;";
    $query->execute();

    header("Location:../pages/index.html");
}



?>