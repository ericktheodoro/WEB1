<?php
require 'db/conexao.php';

$usuarioId = $_POST['usuario_id']; // ID da criança (ou responsável)
$profissionalId = $_POST['profissional'];

$sql = "UPDATE usuario SET profissional_id = ? WHERE id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ii", $profissionalId, $usuarioId);

if ($stmt->execute()) {
    echo "Vínculo confirmado com sucesso!";
} else {
    echo "Erro ao confirmar vínculo: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
