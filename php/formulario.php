<?php

if(empty($_POST) == true) {
        echo "El formulario no ha sido enviado";
} else {
    $name = $_POST['username'];
    $lastName = $_POST['lastName'];
    $email = $_POST['email'];

    echo $name +" " + $lastName + ", " + $email; 

    if (isset($_POST["enviar"])) {
        //variables
        $host = '127.0.0.1';
        $database = 'agenda_db';
        $user = 'root';
        $pswd = '';
        $connection = mysql_connect($host,$user,$pswd);	
        //select database
        mysql_select_db($database, $connection);
    
        //create query
        $sql = "
        INSERT INTO users (name, lastname, email)
        VALUES ('$name', '$lastName','$email') ";
    
        //execute query
        mysql_query($sql, $connection);
    
        //close connection db
        mysql_close($connection);
    }
}


?>
