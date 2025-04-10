import { db } from "../db.js";

// Buscar todos os usuários com paginação
export const getUsers = (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = 5;
  const offset = (page - 1) * limit;

  const q = `SELECT nome, idade, cpf, endereco, genero FROM usuarios LIMIT ${limit} OFFSET ${offset}`;

  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.status(200).json(data);
  });
};

// Criar um novo usuário
export const createUser = (req, res) => {
  const { nome, idade, cpf, endereco, genero } = req.body;

  if (!nome || !idade || !cpf || !endereco || !genero) {
    return res.status(400).json("Todos os campos são obrigatórios.");
  }

  if (nome.trim() === "") {
    return res.status(400).json("Nome não pode ser vazio.");
  }

  if (isNaN(idade) || idade <= 0) {
    return res.status(400).json("Idade deve ser um número maior que 0.");
  }

  if (!isValidCpf(cpf)) {
    return res.status(400).json("CPF deve ter 11 dígitos numéricos.");
  }

  checkCpfExists(cpf, (err, exists) => {
    if (err) return res.status(500).json(err);
    if (exists) return res.status(400).json("CPF já existe.");

    const q = "INSERT INTO usuarios(`nome`, `idade`, `cpf`, `endereco`, `genero`) VALUES (?)";
    const values = [nome, idade, cpf, endereco, genero];

    db.query(q, [values], (err) => {
      if (err) return res.status(500).json(err);
      return res.status(201).json("Usuário criado com sucesso.");
    });
  });
};

// Atualizar usuário existente
export const updateUser = (req, res) => {
  const cpf = req.params.cpf;
  const { nome, idade, endereco, genero } = req.body;

  const checkCpfQuery = "SELECT * FROM usuarios WHERE cpf = ?";
  db.query(checkCpfQuery, [cpf], (err, result) => {
    if (err) return res.status(500).json(err);
    if (result.length === 0) {
      return res.status(404).json("Usuário com esse CPF não encontrado.");
    }

    if (!nome || nome.trim() === "") {
      return res.status(400).json("Nome não pode ser vazio.");
    }

    if (isNaN(idade) || idade <= 0) {
      return res.status(400).json("Idade deve ser um número maior que 0.");
    }

    const q = "UPDATE usuarios SET nome = ?, idade = ?, endereco = ?, genero = ? WHERE cpf = ?";
    const values = [nome, idade, endereco, genero, cpf];

    db.query(q, values, (err) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("Usuário atualizado com sucesso.");
    });
  });
};

// Deletar usuário
export const deleteUser = (req, res) => {
  const cpf = req.params.cpf;

  const checkCpfQuery = "SELECT * FROM usuarios WHERE cpf = ?";
  db.query(checkCpfQuery, [cpf], (err, result) => {
    if (err) return res.status(500).json(err);
    if (result.length === 0) {
      return res.status(404).json("Usuário com esse CPF não encontrado.");
    }

    const q = "DELETE FROM usuarios WHERE cpf = ?";
    db.query(q, [cpf], (err) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("Usuário removido com sucesso.");
    });
  });
};
