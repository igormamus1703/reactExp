import React from "react";

const UserDetail = ({ user, onBack }) => {
  return (
    <div>
      <h1>Detalhes do Usuário</h1>
      <p><strong>Nome:</strong> {user.nome}</p>
      <p><strong>Idade:</strong> {user.idade} anos</p>
      <p><strong>CPF:</strong> {user.cpf}</p>
      <p><strong>Endereço:</strong> {user.endereco}</p>
      <p><strong>Gênero:</strong> {user.genero}</p>
      <button onClick={onBack}>Voltar para Listagem</button>
    </div>
  );
};

export default UserDetail;
