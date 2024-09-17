import {Input} from "@nextui-org/react";
import styled from "styled-components";
import {SearchIcon} from "./searchIcon";

type Props = {
    className: string;
};
const StyledInput = styled(Input)`
  border: 1px solid #121212;
  border-radius: 20px;
  && input {
    border: transparent;
    width: 100%;
    &:focus-visible{
   outline: none!important;
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

export default function SearchBox({className}:Props){
    return(
        <StyledInput className={className} placeholder="Type to search..." startContent={<SearchIcon className="me-3" size={14} />} type="search" />
    )
}