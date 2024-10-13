import WishList from "../AddToCart/WishList";
import CartSVG from "../AddToCart/CartSVG";
import LoginButton from "../AddToCart/LoginButton";
import OpenSearchModalForMobile from '../../../components/MobileHeader/OpenSearchModalForMobile'

type Props = {
    className: string;
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
    searchValue: any;
    setSearchValue: any;
};
export default function AddToCart({className,show,setShow,searchValue,setSearchValue}:Props){
    return(
        <>
         <div className={className}>
            <div className="desktop-localization-wrapper text-center justify-content-center align-items-end d-flex">
              <OpenSearchModalForMobile show={show} setShow={setShow} className={className} searchValue={searchValue} setSearchValue={setSearchValue}/>
              <WishList className="me-2"/>
              <CartSVG className="me-2"/>
            </div>  
         </div>
        </>
    )
}