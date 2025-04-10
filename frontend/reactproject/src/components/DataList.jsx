import React, { useEffect, useState } from "react";
import { List, LiList } from './StyledComponents';

const DataList = ({ onItemClick }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:8800/api/users?page=${page}`)
      .then((response) => response.json())
      .then((newData) => {
        setData((prevData) => [...prevData, ...newData]);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao buscar usuários:", error);
        setLoading(false);
      });
  }, [page]);

  function handleScroll(event) {
    const bottom = event.target.scrollHeight === event.target.scrollTop + event.target.clientHeight;
    if (bottom && !loading) {
      setLoading(true);
      setPage((prevPage) => prevPage + 1);
    }
  }

  return (
    <div onScroll={handleScroll} style={{ height: "400px", overflowY: "auto" }}>
      <List>
        {data.map((item, index) => (
          <LiList key={index} onClick={() => onItemClick(item)} style={{ cursor: "pointer" }}>
            <strong>Nome:</strong> {item.nome} <br />
            <strong>Idade:</strong> {item.idade} anos <br />
            <strong>CPF:</strong> {item.cpf} <br />
            <strong>Endereço:</strong> {item.endereco} <br />
            <strong>Gênero:</strong> {item.genero} <br />
          </LiList>
        ))}
      </List>
      {loading && <p>Carregando...</p>}
    </div>
  );
};

export default DataList;
