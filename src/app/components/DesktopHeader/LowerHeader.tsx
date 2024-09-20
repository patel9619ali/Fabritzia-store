import styled from "styled-components";
import WomenWear from "./MegaMenu/WomenWear/WomenWear";
import MenWear from "./MegaMenu/MensWear/MensWear";
import KidsWear from "./MegaMenu/KidsWear/KidsWear";
import AboutUs from "./MegaMenu/AboutUs";

const StyledNav = styled.nav`
background-color: #fff!important;
`
export default function LowerHeader(){
    return(
        <StyledNav className="navbar navbar-expand-md bg-light bsb-navbar bsb-navbar-hover bsb-navbar-caret">
            <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-body">
                    <ul className="navbar-nav justify-content-center flex-grow-1">
                        <WomenWear/>
                        <MenWear/>
                        <KidsWear/>
                        <AboutUs className="nav-link"/>
                    </ul>
                </div>
            </div>     
        </StyledNav>
    )
}