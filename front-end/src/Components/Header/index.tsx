import React from "react";
import { HeaderComp } from "./styled";
import { BtnVoltar } from '../BtnVoltar'

interface Header {
  titleHeader: string
  hrefPage: string
}

export const Header: React.FC<Header> = ({ titleHeader,  hrefPage }) => {
  return (
    <>
      <HeaderComp>
        <BtnVoltar hrefPage={hrefPage} />
        <h1>{titleHeader}</h1>
      </HeaderComp>
    </>
  );
};
