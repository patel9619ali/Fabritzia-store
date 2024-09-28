import Logo from '../DesktopHeader/Logo/Logo'
import SearchBox from '../DesktopHeader/SearchBox/SearchBox'
import AddToCart from '../DesktopHeader/AddToCart/AddToCart'
import { useState } from 'react';
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
            <SearchBox className="col-md-6 text-center" searchValue={searchValue} setSearchValue={setSearchValue} />
            <AddToCart className="col-md-3"  show={show} setShow={setShow} searchValue={searchValue} setSearchValue={setSearchValue}/>
        </div>
    )
}