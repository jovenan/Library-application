import React from "react";
import axios from 'axios'
import { BtnExcluirDiv } from './styled'

interface BtnExcluir {
  id: string;
}

export const BtnExcluir: React.FC<BtnExcluir> = ({ id }) => {
  const handleExcluir = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    axios.delete("http://localhost:3001/book/" + id, {
        headers: {
        "x-access-token": "iojDjmMBPZmy5ewLxArXVdKIv6QtcFsJ",
        },
    })
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log("erro: " + error);
    });
  };
  return (
    <BtnExcluirDiv>
        <input value="X" type="submit" onClick={(e) => handleExcluir(e)} />
    </BtnExcluirDiv>
  );
};
