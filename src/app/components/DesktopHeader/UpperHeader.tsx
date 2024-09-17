import Logo from '../DesktopHeader/Logo/Logo'
import SearchBox from '../DesktopHeader/SearchBox/SearchBox'
export default function UpperHeader(){
    return(
        <>
        <div className='d-flex justify-content-between'>
            <Logo/>
            <SearchBox/>
        </div>

        </>
    )
}