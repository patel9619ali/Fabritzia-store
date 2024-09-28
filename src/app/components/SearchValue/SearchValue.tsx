import styled from "styled-components";
const SearchWrapper = styled.div`
    z-index: 999;
    background: #fff;
  }

`;
type Props = {
    className: string;
    searchValue: any;
};


export default function SearchValue({className, searchValue }:Props){
  
    return(
      <>
      <SearchWrapper className={className}>{searchValue}</SearchWrapper>
      </>
    )
}