import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Formulario } from './styled'

interface FormEditarLivro {
  id: string;
  title: string;
  description: string;
  genre: string;
  active: boolean;
}

export const FormEditarLivro = () => {

  const navigate = useNavigate();

  const [idForm, setidForm] = useState('');
  const [titleForm, setTitleForm] = useState('');
  const [descriptionForm, setDescriptionForm] = useState('');
  const [genreForm, setGenreForm] = useState('');
  const [activeForm, setActiveForm] = useState('');
  const [mensagem, setMensagem ] = useState(false)

  useEffect(() => {
    const livro = localStorage.getItem('livro') || ''
    const parsedLivro = JSON.parse(livro)
    
    setidForm(parsedLivro.id)
    setTitleForm(parsedLivro.title)
    setDescriptionForm(parsedLivro.description)
    setGenreForm(parsedLivro.genre)
    setActiveForm(parsedLivro.active)

  },[])

  const handleForm = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    e.preventDefault()
    
    axios.put('http://localhost:3001/book/' + idForm, {
      title: titleForm,
      description: descriptionForm,
      genre: genreForm,
      active: activeForm,
    }, {
      headers: {
        'x-access-token': 'iojDjmMBPZmy5ewLxArXVdKIv6QtcFsJ'
      }
    })
    .then(response => {
      console.log(response)
      setMensagem(true)
      setTimeout(() => {
        setMensagem(false)
        navigate('/livros')
      }, 3000)
    })
    .catch(error => {
      console.log('erro: ' + error)
    })
  }

  return (
    <>
      <Formulario>
        <label id="title">
          Titulo:
          <input
            id="title"
            type="text"
            value={titleForm}
            onChange={(e) => setTitleForm(e.target.value)}
          />
        </label>
        <label id="description">
          Descrição:
          <textarea
            id="description"
            value={descriptionForm}
            onChange={(e) => setDescriptionForm(e.target.value)}
          />
        </label>
        <label id="genre">
          Genero:
          <input
            id="genre"
            type="text"
            value={genreForm}
            onChange={(e) => setGenreForm(e.target.value)}
          />
        </label>
        <input type="submit" value="Salvar" onClick={(e) => handleForm(e)} />
        {mensagem ? <p>Livro salvo com sucesso!</p> : ''}
      </Formulario>
    </>
  );
};
