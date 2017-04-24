<?php

header('Content-type: text/json');
include_once("tigereyeDB.php");

if(isset($_POST['search_term'])
    && !empty($_POST['search_term'])
){

$condition = "%".$_POST['search_term']."%";

$sql = "SELECT DISTINCT * FROM Events WHERE Name LIKE " . "'". $condition. "'";

// Execute the query on the database
$query = $tigereyeDB->prepare($sql);
$query->execute();

// Fetches the data from the DB
$result = $query->fetchAll();

// echo JSON encoded data that was fetched from the database
echo json_encode($result);

}

?>
