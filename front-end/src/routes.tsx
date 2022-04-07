import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import EditarLivro from "./Pages/Livro";
import Livros from "./Pages/Livros";
import CadastrarLivro from './Pages/CadastrarLivro'

export default function RoutesFunction() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/livros" element={<Livros />} />
                <Route path="/editar" element={<EditarLivro />} />
                <Route path="/cadastrar" element={<CadastrarLivro />} />
            </Routes>
        </BrowserRouter>
    )
}