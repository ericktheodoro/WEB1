<?php
// processarCadastro.php
include 'db/conexao.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nome = $_POST['nome'];
    $dataNascimento = $_POST['dataNascimento'];
    $genero = $_POST['genero'];
    $email = $_POST['email'];
    $senha = $_POST['senha'];

    // Conexão com o banco de dados
    $conn = new mysqli('localhost', 'root', '', 'web1');

    if ($conn->connect_error) {
        die("Falha na conexão: " . $conn->connect_error);
    }

    // Validação de dados (simplificada)
    if (empty($nome) || empty($dataNascimento) || empty($genero) || empty($email) || empty($senha)) {
        die("Por favor, preencha todos os campos.");
    }

    // Criptografar a senha antes de armazenar
    $senhaHash = password_hash($senha, PASSWORD_BCRYPT);

    // Inserir dados no banco de dados
    $sql = "INSERT INTO usuario (nome, data_nascimento, genero, email, senha, tipo) VALUES (?, ?, ?, ?, ?, 'Criança')";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sssss", $nome, $dataNascimento, $genero, $email, $senhaHash);

    if ($stmt->execute()) {
        echo "Cadastro realizado com sucesso!";
    } else {
        echo "Erro: " . $sql . "<br>" . $conn->error;
    }

    $stmt->close();
    $conn->close();
}
?>
