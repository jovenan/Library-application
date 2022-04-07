import React from "react";
import { Container, ContainerLivros } from "./styled";
import { Header } from "../../Components/Header";
import { FormCadastrarLivro } from '../../Components/FormCadastrarLivro'

export default function CadastrarLivro() {
    return (
        <>
            <Header titleHeader="Cadastrar Livro" hrefPage="/" />
            <Container>
                <ContainerLivros>
                    <FormCadastrarLivro />
                </ContainerLivros>
            </Container>
        </>
    )
}