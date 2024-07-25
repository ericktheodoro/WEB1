-- Criação do banco de dados
CREATE DATABASE IF NOT EXISTS web1;
USE web1;

-- Criação da tabela usuario
CREATE TABLE usuario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    data_nascimento DATE NOT NULL,
    genero ENUM('Masculino', 'Feminino') NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    tipo ENUM('Criança', 'Odontopediatra') NOT NULL,
    crm VARCHAR(50) DEFAULT NULL,
    especialidade VARCHAR(100) DEFAULT NULL,
    profissional_id INT DEFAULT NULL,
    FOREIGN KEY (profissional_id) REFERENCES usuario(id) ON DELETE SET NULL
);

-- Criação da tabela avatar
CREATE TABLE avatar (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    cor_pele VARCHAR(50),
    formato_olhos VARCHAR(50),
    cor_olhos VARCHAR(50),
    boca VARCHAR(50),
    cabelo VARCHAR(50),
    roupa VARCHAR(50),
    FOREIGN KEY (usuario_id) REFERENCES usuario(id) ON DELETE CASCADE
);

-- Criação da tabela respostas
CREATE TABLE respostas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    data_hora TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    profissional_id INT NOT NULL,
    tipo_procedimento VARCHAR(100),
    resposta VARCHAR(255),
    pre_pos_consulta ENUM('Pre', 'Pos'),
    FOREIGN KEY (usuario_id) REFERENCES usuario(id) ON DELETE CASCADE,
    FOREIGN KEY (profissional_id) REFERENCES usuario(id) ON DELETE CASCADE
);
