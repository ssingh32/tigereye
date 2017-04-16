<?php

/*
 *    Grabs all of the events in the database and outputs 
 *    the information in JSON format
 *
 */

header('Content-type: text/json');
include_once("tigereyeDB.php"); // for $tigereyeDB

$sql = "SELECT DISTINCT * FROM SocialAreas";

// Execute the query on the database
$query = $tigereyeDB->prepare($sql);
$query->execute();

// Fetches the data from the DB
$result = $query->fetchAll();

// echo JSON encoded data that was fetched from the database
echo json_encode($result);

?>
