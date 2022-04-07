import styled from "styled-components";

export const ContainerBtn = styled.div`
  width: 400px;
  height: 50px;
  background: #fff;
  color: #623cea;
  border-radius: 20px;

  &:hover {
    background: #623cea;
    color: #fff;
  }

  a {
    text-decoration: none;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: inherit;
    font-size: 2rem;
  }
`;
