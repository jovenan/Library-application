import React from "react";
import { Header } from "../../Components/Header";
import { FormEditarLivro } from "../../Components/FormEditarLivro";
import { Container, ContainerLivros } from './styled'

export default function EditarLivro() {
    
    return (
        <>
            <Header titleHeader="Editar Livro" hrefPage="/livros"/>
            
            <Container>
                <ContainerLivros>
                    <FormEditarLivro />
                </ContainerLivros>
            </Container>
        </>
    )
}