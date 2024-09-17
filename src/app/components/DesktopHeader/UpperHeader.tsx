import Logo from '../DesktopHeader/Logo/Logo'
import SearchBox from '../DesktopHeader/SearchBox/SearchBox'
import AddToCart from '../DesktopHeader/AddToCart/AddToCart'
export default function UpperHeader(){
    return(
        <>
        <div className='row'>
            <Logo className="col-lg-3"/>
            <SearchBox className="col-lg-4 py-2"/>
            <AddToCart className="col-lg-3"/>
        </div>

        </>
    )
}