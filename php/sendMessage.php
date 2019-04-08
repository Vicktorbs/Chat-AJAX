<?php

    include('db.php');

    if(isset($_POST)) {
        $user = $_POST['userM'];
        $messageN = $_POST['contM'];

        $query = "INSERT into chat(name, message) VALUES ('$user', '$messageN')";
        $result = mysqli_query($connection, $query);

        if (!$result) {
            die('Query Failed.');
        }
    
        echo "Mensaje enviado ";
    } 
?>