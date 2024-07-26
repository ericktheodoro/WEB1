<?php
// processarCadastro.php
include 'db/conexao.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Captura e validação básica dos dados
    $nome = trim($_POST['nome']);
    $dataNascimento = trim($_POST['dataNascimento']);
    $genero = trim($_POST['genero']);
    $email = trim($_POST['email']);
    $senha = trim($_POST['senha']);

    // Conexão com o banco de dados
    $conn = new mysqli('localhost', 'root', '', 'web1');

    // Verifica a conexão
    if ($conn->connect_error) {
        die("Falha na conexão: " . $conn->connect_error);
    }

    // Validação de dados (simplificada)
    if (empty($nome) || empty($dataNascimento) || empty($genero) || empty($email) || empty($senha)) {
        die("Por favor, preencha todos os campos.");
    }

    // Verificação adicional do formato da data (opcional)
    $dataNascimentoValida = DateTime::createFromFormat('Y-m-d', $dataNascimento);
    if (!$dataNascimentoValida || $dataNascimentoValida->format('Y-m-d') !== $dataNascimento) {
        die("Data de nascimento inválida. Use o formato YYYY-MM-DD.");
    }

    // Criptografar a senha antes de armazenar
    $senhaHash = password_hash($senha, PASSWORD_BCRYPT);

    // Inserir dados no banco de dados
    $sql = "INSERT INTO usuario (nome, data_nascimento, genero, email, senha, tipo) VALUES (?, ?, ?, ?, ?, 'Criança')";
    $stmt = $conn->prepare($sql);

    if (!$stmt) {
        die("Erro na preparação da consulta: " . $conn->error);
    }

    $stmt->bind_param("sssss", $nome, $dataNascimento, $genero, $email, $senhaHash);

    if ($stmt->execute()) {
        echo "Cadastro realizado com sucesso!";
    } else {
        echo "Erro na execução: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
}
?>
