import styled from "styled-components";

export const ContainerLivroItem = styled.div`
    width: 300px;
    height: 150px;
    border-radius: 30px;
    background-color: #00A5E0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 3% 1%;
    margin: 2%;

    h3 {
        color: #fff;
        font-size: 1.3rem;
        font-weight: 700;
    }
    p {
        color: white;
        font-size: 1rem;
    }
    img {
        width: 32px;
        position: relative;
        left: 125px;
        bottom: -25px;
    }
`