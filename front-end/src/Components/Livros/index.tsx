import React, { useState, useEffect } from "react";
import axios from "axios";
import { LivroItem } from "./livroItem";

interface dataLivros {
  _id: string;
  title: string;
  description: string;
  genre: string;
  active: boolean;
}

export const LivrosComp = () => {
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/books")
      .then((response) => {
        
        setLivros(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <>
      {livros.map((livro: dataLivros, index) => (
        <LivroItem
          key={index}
          id={livro._id}
          title={livro.title}
          description={livro.description}
          genre={livro.genre}
          active={livro.active}
        />
      ))}
    </>
  );
};
