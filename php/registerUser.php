<?php

    include('db.php');

    if(isset($_POST)) {
        $user = $_POST['user'];
        $password = password_hash($_POST['password'], PASSWORD_DEFAULT);

        $query = "INSERT into chatuser(username, password) VALUES ('$user', '$password')";
        $result = mysqli_query($connection, $query);

        if (!$result) {
            die('Query Failed.');
        }
    
        echo "Registro correcto";  
    } 
?>