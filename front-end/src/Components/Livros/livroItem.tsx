import React from "react";
import { Link } from "react-router-dom";
import { ContainerLivroItem } from './styled'
import { BtnExcluir } from '../ExcluirProduto'

interface dataLivros {
    id: string,
    title: string,
    description: string,
    genre: string,
    active: boolean
}

export const LivroItem: React.FC<dataLivros> = ({id, title, description, genre, active}) => {

    const handleAlterarLivro = () => {
        let altLivro: dataLivros = {
            id: id,
            title: title,
            description: description,
            genre: genre,
            active: active
        }
    
        localStorage.setItem("livro", JSON.stringify(altLivro))
    }

    return (
        <>
            <ContainerLivroItem>
                <BtnExcluir id={id} />
                <h3>{title}</h3>
                <p>Resumo: {description.substring(0,100)}...</p>
                <Link to="/editar" onClick={handleAlterarLivro}><img src="/lapis.png" alt="" /></Link>
            </ContainerLivroItem>
        </>
    )
}