import React, { useState, useEffect } from "react";
import { Input, Select } from './StyledComponents';

const UserForm = ({ onSubmit, user = { nome: "", idade: "", cpf: "", endereco: "", genero: "" } }) => {
  const [form, setForm] = useState(user);

  useEffect(() => {
    setForm(user);
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => {
    const url = user.cpf ? `http://localhost:8800/api/users/${user.cpf}` : "http://localhost:8800/api/users";
    const method = user.cpf ? "PUT" : "POST";

    fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then(() => onSubmit())
      .catch((err) => console.error("Erro ao salvar usuário:", err));
  };

  return (
    <div>
      <h1>{user.cpf ? "Editar Usuário" : "Adicionar Usuário"}</h1>
      <Input
        type="text"
        name="nome"
        placeholder="Nome"
        value={form.nome}
        onChange={handleInputChange}
      />
      <Input
        type="number"
        name="idade"
        placeholder="Idade"
        value={form.idade}
        onChange={handleInputChange}
      />
      <Input
        type="text"
        name="cpf"
        placeholder="CPF"
        value={form.cpf}
        onChange={handleInputChange}
        disabled={user.cpf ? true : false}
      />
      <Input
        type="text"
        name="endereco"
        placeholder="Endereço"
        value={form.endereco}
        onChange={handleInputChange}
      />
      <Select
        name="genero"
        value={form.genero}
        onChange={handleInputChange}
      >
        <option value="Masculino">Masculino</option>
        <option value="Feminino">Feminino</option>
        <option value="Outro">Outro</option>
      </Select>
      <button onClick={handleSubmit}>
        {user.cpf ? "Salvar Alterações" : "Cadastrar"}
      </button>
    </div>
  );
};

export default UserForm;
