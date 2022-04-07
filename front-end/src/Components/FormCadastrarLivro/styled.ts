import styled from 'styled-components'

export const Formulario = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 3%;

    input {
        border: 2px solid rgba(190,238,255,1);
        border-radius: 50px;
        font-size: 1rem;
        width: 300px;
        height: 25px;
        padding-left: 2%;
        margin-top: 1%;
    }
    textarea {
        border: 2px solid rgba(190,238,255,1);
        border-radius: 15px;
        font-size: 1rem;
        width: 300px;
        height: 100px;
        padding-left: 2%;
        margin-top: 1%;
    }
    input[type=submit] {
        border: 2px solid #623CEA;
        border-radius: 50px;
        background-color: #623CEA;
        font-size: 1rem;
        width: 100px;
        height: 25px;
        margin-top: 1%;
        color: white;
        font-weight: bold;
        margin-left: 100px;
    }
`