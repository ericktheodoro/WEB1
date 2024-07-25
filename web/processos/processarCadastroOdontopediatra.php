<?php
// Inclui a conexão com o banco de dados
include 'db/conexao.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nome = $_POST['nome'];
    $crm = $_POST['crm'];
    $especialidade = $_POST['especialidade'];
    $email = $_POST['email'];
    $senha = $_POST['senha'];

    // Validação de dados (simplificada)
    if (empty($nome) || empty($crm) || empty($especialidade) || empty($email) || empty($senha)) {
        die("Por favor, preencha todos os campos.");
    }

    // Criptografar a senha antes de armazenar
    $senhaHash = password_hash($senha, PASSWORD_BCRYPT);

    // Inserir dados no banco de dados
    $sql = "INSERT INTO usuario (nome, crm, especialidade, email, senha, tipo) VALUES (?, ?, ?, ?, ?, 'Odontopediatra')";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sssss", $nome, $crm, $especialidade, $email, $senhaHash);

    if ($stmt->execute()) {
        echo "Cadastro realizado com sucesso!";
    } else {
        echo "Erro: " . $sql . "<br>" . $conn->error;
    }

    $stmt->close();
    $conn->close();
}
?>
