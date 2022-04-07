import React from "react";
import { Link } from "react-router-dom";
import { ContainerBtn } from "./styled";

interface ButtonOperation {
  titleButton: string;
  linkButton: string;
}

export const ButtonOperation: React.FC<ButtonOperation> = ({
  titleButton,
  linkButton,
}) => {
  return (
    <>
      <ContainerBtn>
        <Link to={linkButton}>{titleButton}</Link>
      </ContainerBtn>
    </>
  );
};
