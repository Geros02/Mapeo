<?php
// Configuración de la conexión a la base de datos
$host = 'localhost';
$db = 'cenizarioprueba';
$user = 'root';
$pass = '';

// Crear una conexión
$conexion = new mysqli($host, $user, $pass, $db);

// Verificar la conexión
if ($conexion->connect_error) {
    die("Conexión fallida: " . $conexion->connect_error);
}

// Consultar los estados de los botones
$query = "SELECT nombre, estado FROM botones";
$result = $conexion->query($query);

$data = [];
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $data[$row['nombre']] = $row['estado'];
    }
}

// Devolver los datos en formato JSON
header('Content-Type: application/json');
echo json_encode($data);

// Cerrar la conexión
$conexion->close();
?>
