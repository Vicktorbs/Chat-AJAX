<?php

    include('db.php');

    if(isset($_POST)) {
        $user = $_POST['user'];
        $password = $_POST['password'];
        echo password_verify ( $password , PASSWORD_DEFAULT );

        $query =  "SELECT * FROM chatuser WHERE username LIKE '$user'";
        $result = mysqli_query($connection, $query);

        if (!$result) {
            die('Query Error'.mysqli_error($connection));
        }
        $json = array();
        $rPass;
        while($row = mysqli_fetch_array($result)) {
            $json[] = array(
            'name' => $row['username'],
            'pass' => $row['password'],
            'id' => $row['id']
            );
            $rPass = $row['password'];
        }
        $jsonstring = json_encode($json);
        // echo $rPass;
        if (password_verify ( $password , $rPass )) {
            echo $jsonstring;
        }
        // Juan Carlos -> holamundo
    } 
?>