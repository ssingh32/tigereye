<?php

header('Content-type: text/json');
include_once("tigereyeDB.php");

if(isset($_POST['search_term'])){

    if (!empty($_POST['search_term'])) {

        // condition to look for any events that contain the term anywhere in the name
        $condition = "%".$_POST['search_term']."%";

        $sql = "SELECT DISTINCT * FROM Events WHERE Name LIKE " . "'". $condition. "'";

        // Execute the query on the database
        $query = $tigereyeDB->prepare($sql);
        $query->execute();

        // Fetches the data from the DB
        $result = $query->fetchAll();

        // echo JSON encoded data that was fetched from the database that matched the search term
        echo json_encode($result);
    }
    else {
        // no results because the search term field was empty
        echo json_encode(0);
    }

}

?>