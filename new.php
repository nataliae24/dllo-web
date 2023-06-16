<?php
if(empty($_POST) == true) {
        echo "El formulario no ha sido enviado";
} else {
    $name = $_POST['userName'];
    $firstName = $_POST['firstName'];
    $secondName = $_POST['secondName'];
    $email = $_POST['email'];
    $user = $_POST['user'];
    $password = $_POST['password'];

    if ($_POST) {
        //data connection db
        $servername = 'localhost';
        $database = 'agenda_db';
        $user = 'root';
        $pswd = '';
        $connection = new mysqli($servername,$user,$pswd,$database);
         
        if ($connection->connect_error) {
            die("Connection failed: " . $connection->connect_error);
        }

        // Validar el nombre
        if (empty($name) || empty($firstName) || empty($secondName) || empty($user) || empty($password)) {
          die("Todos los campos son requeridos");
        }
      
        // Validar el email
        if (empty($email)) {
          die("El email es requerido");
        } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
          die("El formato del email es inválido");
        }

        $sql_select="SELECT * FROM users WHERE (email='$email');";
        $result = $connection->query($sql_select);

        if ($result->num_rows > 0) {
            echo '<script language="javascript">alert("Error: El email ya existe.");window.location.href="create_user.html"</script>';
        } else {
            $sql_insert = "INSERT INTO users (name, first_name, second_name, email, user, password)
            VALUES ('$name', '$firstName','$secondName','$email', '$user','$password') ";
        
            if ($connection->query($sql_insert)==true) {
                echo '<script language="javascript">alert("¡Registro completado con éxito!");window.location.href="index.php"</script>';
            } else {
                echo "Error: " . $sql_insert . "<br>" . $connection->error;
            }
        }

        //close connection db
        $connection->close();
    }
}

?>
