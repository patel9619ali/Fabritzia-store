import React from "react";
import styled from "styled-components";

const InputSubmitButton = styled.input`
    cursor: pointer;
    background-color: #6a7ec5;
    padding: 14px;
    color: #fff;
    font-weight: 700;
    width: 40%;
    font-size: 18px;
    line-height: 16px;
    margin: auto;
    display: block;
    border: 1px solid #6a7ec5;
    @media (max-width:768px){
    width: 75%;
    }
`;
type Parse = {
    pending: Boolean
}
export function LoaderSubmit({pending}:Parse){
    return(
        <>
        {pending ? (<p>Pending Loading</p>):
          (<InputSubmitButton type="submit" className="mb-3"/>)
        }
        </>
    )
}