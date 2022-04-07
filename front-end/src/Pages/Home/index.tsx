import React from "react";
import { Header } from "../../Components/Header";
import { ButtonOperation } from "../../Components/OperationBtn";
import { Container } from './styled'

export default function Home(): JSX.Element {
    return (
        <>
            <Header titleHeader="Home" hrefPage="Home" />
            <Container>
                <ButtonOperation titleButton="Acessar todos os livros" linkButton="/livros" />
                <ButtonOperation titleButton="Cadastrar livro" linkButton="/cadastrar" />
            </Container>
        </>
    )
}