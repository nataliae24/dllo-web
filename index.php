<?php
//data connection db
$servername = 'localhost';
$database = 'agenda_db';
$user = 'root';
$pswd = '';
$connection = new mysqli($servername,$user,$pswd,$database);

if ($connection->connect_error) {
    die("Connection failed: " . $connection->connect_error);
}

$sql_select="SELECT * FROM users";
$result = $connection->query($sql_select);

if ($connection->query($sql_select)==false) {
    echo "Error: " . $sql_select . "<br>" . $connection->error;
}
//close connection db
$connection->close();
?>


<!DOCTYPE html>
<html lang="en">
<head>
  <title>Home</title>
  <meta charset="utf-8">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
</head>
<body>

<div class="jumbotron text-center">
  <h2>Usuarios Registrados</h2>
</div>
  
<div class="container">
  <div class="row">
    <div>
    <p><a class="btn btn-primary"" href="create_user.html">Nuevo usuario</a></p>
    <table class="table">
            <tr>
                <th>Nombre</th>
                <th>Primer apellido</th>
                <th>Segundo apellido</th>
                <th>Email</th>
                <th>Usuario</th>
            </tr>
        <?php foreach ($result as $key => $value): ?> 
            <tr>
               <td><?= $value['name']; ?></td>
               <td><?= $value['first_name']; ?></td>
               <td><?= $value['second_name']; ?></td>
               <td><?= $value['email']; ?></td>
               <td><?= $value['user']; ?></td>
            </tr>
        <?php endforeach; ?>
        </table>
    </div>
    
  </div>
</div>
</body>
</html>