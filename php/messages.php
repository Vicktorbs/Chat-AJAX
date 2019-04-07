<?php

    include('db.php');

    $query = "SELECT * FROM chat";
    $result = mysqli_query($connection, $query);

    if (!$result) {
        die('Query failed'.mysqli_error($connection));
    }

    function formatearFecha($fecha){
        return date('g:i a', strtotime($fecha));
    }

    $json = array();
    while($row = mysqli_fetch_array($result)) {
        $json[] = array(
        'name' => $row['name'],
        'message' => $row['message'],
        'id' => $row['id'],
        'date' => formatearFecha($row['date'])
        );
    }
    $jsonstring = json_encode($json);
    echo $jsonstring;

?>