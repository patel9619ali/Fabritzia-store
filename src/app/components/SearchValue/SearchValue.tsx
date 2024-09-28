import styled from "styled-components";
const SearchWrapper = styled.div`
    z-index: 999;
    background: #fff;
    box-shadow: 0 5px 20px #8f959a99;
    border: .1rem solid #DBDBDB;
    border-radius: 12px;
    margin-top: 5px;
    left: 0;
  }

`;
type Props = {
    className: string;
    searchValue: any;
};


export default function SearchValue({className, searchValue }:Props){
  
    return(
      <>
      <SearchWrapper className={className}>
           <div>{searchValue}</div> 
           <div>{searchValue}</div> 
           <div>{searchValue}</div> 
           <div>{searchValue}</div> 
           <div>{searchValue}</div> 
           <div>{searchValue}</div> 
           <div>{searchValue}</div> 
           <div>{searchValue}</div> 
           <div>{searchValue}</div> 
           <div>{searchValue}</div> 
           <div>{searchValue}</div> 
           <div>{searchValue}</div> 
       </SearchWrapper>
      </>
    )
}