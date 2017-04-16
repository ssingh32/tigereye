<?php

// to get the permissions correct, run <unix> htdocs chmod -R 777 TigerEyeTest/

include_once("tigereyeDB.php");

if(isset($_POST['name'])
    && isset($_FILES['image'])
    && isset($_POST['location'])
    && isset($_POST['start'])
    && isset($_POST['end'])
    && isset($_POST['cost'])
    && isset($_POST['description'])
    && !empty($_POST['name'])
    && !empty($_FILES['image'])
    && !empty($_POST['location'])
    && !empty($_POST['start'])
    && !empty($_POST['end'])
    && !empty($_POST['cost'])
    && !empty($_POST['description'])
){

    $cost = (int)$_POST['cost'];

    $fields = "Name,Image,Location,EventStart,EventEnd,Cost,Description";

    $uploaddir = '../uploads/';
    $uploadfile = $uploaddir . basename($_FILES['image']['name']);

    // echo $uploaddir;
    // echo "\r\n;";
    echo $_FILES['image']['tmp_name'];

    move_uploaded_file($_FILES['image']['tmp_name'], $uploadfile);

    $values = "'".$_POST['name']."','".$uploadfile."','".$_POST['location']."','";
    $values = $values.$_POST['start']."','".$_POST['end']."',";
    $values = $values.$cost.",'".$_POST['description']."'";

    // echo $values;
    // echo "\r\n;";

    $sql = "INSERT INTO Events(".$fields.") VALUES(".$values.")";
    $query = $tigereyeDB->prepare($sql);

    // echo "\r\n;";
    // echo $sql;
    // echo "\r\n;";
    $query->execute();

    header("Location:../pages/index.html");
}



?>
