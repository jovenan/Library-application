import React from "react";
import { Header } from "../../Components/Header";
import { LivrosComp } from "../../Components/Livros"
import { Container, ContainerLivros } from "./styled";

export default function Livros() {
    return (
        <>
            <Header titleHeader="Livros" hrefPage="/" />
            <Container>
                <ContainerLivros>
                    <LivrosComp />
                </ContainerLivros>
            </Container>
        </>
    )
}