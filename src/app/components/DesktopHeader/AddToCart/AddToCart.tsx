import Image from "next/image";
import Link from "next/link";
import WishList from "../AddToCart/WishList";
import CartSVG from "../AddToCart/CartSVG";
import LoginButton from "../AddToCart/LoginButton";

type Props = {
    className: string;
};
export default function AddToCart({className}:Props){
    return(
        <>
         <div className={className}>
            <div className="desktop-localization-wrapper text-center justify-content-center align-items-center d-flex">
              <WishList className="me-3"/>
              <CartSVG className="me-3"/>
              <LoginButton/>
            </div>  
         </div>
        </>
    )
}