<?php
require 'db/conexao.php';

$sql = "SELECT id, nome, especialidade FROM usuario WHERE tipo = 'Odontopediatra'";
$result = $conn->query($sql);

$profissionais = [];
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $profissionais[] = $row;
    }
}

header('Content-Type: application/json');
echo json_encode($profissionais);

$conn->close();
?>
