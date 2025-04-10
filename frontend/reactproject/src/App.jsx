import React, { useState } from "react";
import DataList from "./components/DataList";
import UserForm from "./components/UserForm";
import UserDetail from "./components/UserDetail";
import { GlobalStyle, Title, ButtonList } from './components/StyledComponents';

function App() {
  const [currentView, setCurrentView] = useState("list"); // "list", "form", "detail"
  const [selectedItem, setSelectedItem] = useState(null);

  function handleAddClick() {
    setCurrentView("form");
  }

  function handleItemClick(item) {
    setSelectedItem(item);
    setCurrentView("detail");
  }

  function handleBackToList() {
    setCurrentView("list");
    setSelectedItem(null);
  }

  function handleFormSubmit() {
    setCurrentView("list");
  }

  return (
    <div>
      <GlobalStyle />
      <Title>Cadastro de Usuários</Title>
      {currentView === "list" && (
        <div>
          <ButtonList onClick={handleAddClick}>Adicionar Novo Usuário</ButtonList>
          <DataList onItemClick={handleItemClick} />
        </div>
      )}

      {currentView === "form" && (
        <UserForm onSubmit={handleFormSubmit} />
      )}

      {currentView === "detail" && (
        <UserDetail user={selectedItem} onBack={handleBackToList} />
      )}
    </div>
  );
}

export default App;
