import Logo from '../DesktopHeader/Logo/Logo'
import SearchBox from '../DesktopHeader/SearchBox/SearchBox'
import AddToCart from '../DesktopHeader/AddToCart/AddToCart'
export default function UpperHeader(){
    return(
        <div className='row'>
            <Logo className="col-md-3"/>
            <SearchBox className="col-md-6 text-center"/>
            <AddToCart className="col-md-3"/>
        </div>
    )
}