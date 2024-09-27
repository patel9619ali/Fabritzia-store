import {SearchIcon} from "../SearchBox/searchIcon"
import WishList from "../AddToCart/WishList";
import CartSVG from "../AddToCart/CartSVG";
import LoginButton from "../AddToCart/LoginButton";
import { useState } from 'react';
import OpenSearchModalForMobile from '../../../components/MobileHeader/OpenSearchModalForMobile'

type Props = {
    className: string;
};
export default function AddToCart({className}:Props){
    const [show, setShow] = useState(false);
    return(
        <>
         <div className={className}>
            <div className="desktop-localization-wrapper text-center justify-content-center align-items-end d-flex">
              <OpenSearchModalForMobile show={show} setShow={setShow} className={className}/>
              <WishList className="me-2"/>
              <CartSVG className="me-2"/>
              <LoginButton/>
            </div>  
         </div>
        </>
    )
}