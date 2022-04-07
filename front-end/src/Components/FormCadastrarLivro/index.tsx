import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Formulario } from './styled'

interface FormCadastrarLivro {
  title: string;
  description: string;
  genre: string;
  active: boolean;
}

export const FormCadastrarLivro = () => {

  const navigate = useNavigate();

  const [idForm, setidForm] = useState('');
  const [titleForm, setTitleForm] = useState('');
  const [descriptionForm, setDescriptionForm] = useState('');
  const [genreForm, setGenreForm] = useState('');
  const [activeForm, setActiveForm] = useState('');
  const [mensagem, setMensagem ] = useState(false)

  const handleForm = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    e.preventDefault()
    
    axios.post('http://localhost:3001/book/', {
      title: titleForm,
      description: descriptionForm,
      genre: genreForm,
      active: true,
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
        {mensagem ? <p>Livro cadastrado com sucesso!</p> : ''}
      </Formulario>
    </>
  );
};
