import React from "react";
import { useNavigate } from 'react-router-dom';
import { BtnVoltarDiv } from "./styled";

interface BtnVoltar {
    hrefPage: string
}

export const BtnVoltar: React.FC<BtnVoltar> = ({hrefPage}) => {

    const navigate = useNavigate();

    const handleVoltar = ((e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
        e.preventDefault()
        navigate(hrefPage)
    })

    if (hrefPage === "Home") {
        return <></>
    } else {
        return (
            <BtnVoltarDiv>
                <input value="<" type="submit" onClick={(e) => handleVoltar(e)} />
            </BtnVoltarDiv>
        )
    }

    
}