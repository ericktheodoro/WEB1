<?php
include 'db/conexao.php';

$response = array('success' => false, 'message' => '');

try {
    // Verifica se os dados foram enviados via POST
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $usuario_id = 1; // ID do usuário logado (isso deve ser dinâmico no sistema real)
        $cor_pele = $_POST['corPele'];
        $formato_olhos = $_POST['formatoOlhos'];
        $cor_olhos = $_POST['corOlhos'];
        $boca = $_POST['boca'];
        $cabelo = $_POST['cabelo'];
        $roupa = $_POST['roupa'];

        // Insere os dados no banco de dados
        $sql = "INSERT INTO avatar (usuario_id, cor_pele, formato_olhos, cor_olhos, boca, cabelo, roupa) VALUES (?, ?, ?, ?, ?, ?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("issssss", $usuario_id, $cor_pele, $formato_olhos, $cor_olhos, $boca, $cabelo, $roupa);

        if ($stmt->execute()) {
            $response['success'] = true;
            $response['message'] = 'Avatar salvo com sucesso!';
        } else {
            $response['message'] = 'Erro ao salvar avatar.';
        }
    } else {
        $response['message'] = 'Método inválido.';
    }
} catch (Exception $e) {
    $response['message'] = 'Erro: ' . $e->getMessage();
}

header('Content-Type: application/json');
echo json_encode($response);
?>
