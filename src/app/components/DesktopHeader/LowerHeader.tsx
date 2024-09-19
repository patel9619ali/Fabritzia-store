import WomenWear from "../DesktopHeader/WomenWear/WomenWear";
export default function LowerHeader(){
    return(
        <nav className="navbar navbar-expand-md bg-light bsb-navbar bsb-navbar-hover bsb-navbar-caret">
            <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-body">
                    <WomenWear/>
                </div>
            </div>     
        </nav>
    )
}