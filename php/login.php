<?php

header('Content-type: application/json');
include_once("tigereyeDB.php");

if(isset($_POST['user_name'])
    && isset($_POST['user_password'])
    && !empty($_POST['user_name'])
    && !empty($_POST['user_password'])
){

    $condition  = "Name = '" . $_POST['user_name'] . "'";
    $condition  = $condition . " AND Password = '" . $_POST['user_password'] . "'";

    $sql = "SELECT DISTINCT * FROM Users WHERE " . $condition;
    $query = $tigereyeDB->prepare($sql);

    $query->execute();
    $result = $query->fetchAll();

    // redirect to the home page logged in
    if ($result != null){
        echo json_encode(true); // valid username/pass
    }
    else {
        echo json_encode(false); // invalid username/pass so echo false
    }
}

else {
    echo json_encode(false); // invalid username/pass so echo false
}

?>
