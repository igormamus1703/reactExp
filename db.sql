CREATE DATABASE IF NOT EXISTS crud;

USE crud;

-- Criação da tabela usuarios
CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    idade INT NOT NULL CHECK (idade > 0),
    cpf CHAR(11) NOT NULL UNIQUE,
    endereco VARCHAR(255) NOT NULL,
    genero ENUM('Masculino', 'Feminino', 'Outro') NOT NULL
);

-- Inserção de dados de exemplo
INSERT INTO usuarios (nome, idade, cpf, endereco, genero) VALUES
('João Silva', 30, '12345678901', 'Rua A, 123, São Paulo', 'Masculino'),
('Maria Oliveira', 25, '23456789012', 'Rua B, 456, Rio de Janeiro', 'Feminino'),
('Carlos Pereira', 40, '34567890123', 'Rua C, 789, Belo Horizonte', 'Masculino'),
('Ana Souza', 35, '45678901234', 'Rua D, 101, Porto Alegre', 'Feminino'),
('Pedro Costa', 28, '56789012345', 'Rua E, 202, Curitiba', 'Masculino');
