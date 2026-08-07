<?php

include("conexion.php");

$nombre=$_POST['nombre'];

$correo=$_POST['correo'];

$objetivo=$_POST['objetivo'];

$sql="INSERT INTO registros(nombre,correo,objetivo)

VALUES('$nombre','$correo','$objetivo')";

if(mysqli_query($conn,$sql)){

    header("Location: ../gracias.html");

}

else{

    echo "Error al registrar";

}

mysqli_close($conn);

?>