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
const SearchValueWrapper = styled.div`
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
           <SearchValueWrapper>{searchValue}</SearchValueWrapper> 
       </SearchWrapper>
      </>
    )
}