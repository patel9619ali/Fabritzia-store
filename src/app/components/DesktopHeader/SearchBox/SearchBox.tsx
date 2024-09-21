import {Input} from "@nextui-org/react";
import styled from "styled-components";
import {SearchIcon} from "./searchIcon";

type Props = {
    className: string;
};
const StyledInput = styled(Input)`
  border: .1rem solid #DBDBDB;
  width: 60%;
  border-radius: 20px;
  background-color: #FAFAFA;
    @media (max-width: 767px){
        width: 90% !important;
        border: 1px solid #e9e9eb !important;
        padding: 10px 14px;
        box-shadow: 0 4px 10px 0 rgba(40,44,63,.10196078431372549);
        background-color: #fff;
  }  
  && input {
    border: transparent;
    width: 100%;
    &:focus-visible{
   outline: none!important;
    }
   &::placeholder{
    font-size: 16px;
    }
  }
    [data-slot="input-wrapper"] {
    box-shadow: none!important;
  }
    [data-slot="inner-wrapper"] {
    display: flex;
    align-items: center;
  }
`;
const StyledSearchWrapper = styled.div`
    justify-content: center;
    display: flex;
  }

`;

export default function SearchBox({className}:Props){
    return(
      <StyledSearchWrapper className={className}>
        <StyledInput className=" py-2 " placeholder="Type to search..." startContent={<SearchIcon className="me-3" size={14} />} type="search" />
      </StyledSearchWrapper>
    )
}