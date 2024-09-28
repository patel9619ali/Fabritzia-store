import Logo from '../DesktopHeader/Logo/Logo'
import SearchBox from '../DesktopHeader/SearchBox/SearchBox'
import AddToCart from '../DesktopHeader/AddToCart/AddToCart'
import styled from 'styled-components';
import { useState } from 'react';
const SearchBoxWrapper = styled.div`
    text-align: center!important;
`;
type Props = {
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
    searchValue: any;
    setSearchValue: any;
};
export default function UpperHeader({show,setShow,searchValue,setSearchValue}:Props){
    return(
        <div className='row'>
            <Logo className="col-md-3"/>
            <SearchBoxWrapper className="col-md-6 position-relative">
                <SearchBox className='' searchValue={searchValue} setSearchValue={setSearchValue} />
            </SearchBoxWrapper>
            <AddToCart className="col-md-3"  show={show} setShow={setShow} searchValue={searchValue} setSearchValue={setSearchValue}/>
        </div>
    )
}