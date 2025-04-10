import styled, { createGlobalStyle } from "styled-components";

// Global styles (equivalente ao app.css)
export const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    text-align: center;
  }
  
  #root {
    max-width: 100%;
    margin: 0 auto;
    padding: 2rem;
  }
`;

// Título
export const Title = styled.h1`
  color: black;
`;

// Listagem
export const List = styled.ul`
  background-color: white;
`;

export const LiList = styled.li`
  color: black;
  margin: 20px;
  background-color: white;
  border-radius: 4px;
  list-style-type: none;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

// Botão de Listagem
export const ButtonList = styled.button`
  background-color: rgb(106, 151, 206);
  border-radius: 4px;
  margin: 10px;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 16px;
  
  &:hover {
    background-color: rgb(46, 94, 91);
  }
`;

// Modal
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 400px;
  max-width: 80%;
  text-align: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
`;

export const ModalButton = styled.button`
  margin-top: 15px;
  padding: 10px 15px;
  background-color: rgb(116, 235, 229);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: rgb(46, 94, 91);
  }
`;

// Inputs
export const Input = styled.input`
  padding: 10px;
  margin: 5px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

export const Select = styled.select`
  padding: 10px;
  margin: 5px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;
