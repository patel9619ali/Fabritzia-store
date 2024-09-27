import Logo from '../DesktopHeader/Logo/Logo'
import SearchBox from '../DesktopHeader/SearchBox/SearchBox'
import AddToCart from '../DesktopHeader/AddToCart/AddToCart'
import { useState } from 'react';
export default function UpperHeader(){
    const [searchValue, setSearchValue] = useState("");
    return(
        <div className='row'>
            <Logo className="col-md-3"/>
            <SearchBox className="col-md-6 text-center" searchValue={searchValue} setSearchValue={setSearchValue} />
            <AddToCart className="col-md-3"/>
        </div>
    )
}