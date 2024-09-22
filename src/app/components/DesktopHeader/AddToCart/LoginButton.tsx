import Link from "next/link";
import styled from "styled-components";
const StyledNav = styled.nav`
    background-color: #fff!important;
    padding: 0!important;
`
const StyledLink = styled(Link)`
&:after{
vertical-align: baseline!important;
}
&:before{
content: '';
position: relative !important;
border: none !important;
font-family: "Font Awesome 5 Free";
background: url('Assets/profile.svg') no-repeat center!important;
display: inline-block !important;
width: 15px !important;
height: 15px !important;
vertical-align: middle;
}

color:rgb(0 0 0 / 65%);

`
const StyledUnOrderedList = styled.ul`
    list-style: none!important;
    padding: 0!important;
    margin: 0!important;
`
export default function LoginButton(){
    return(
        <>
        <StyledNav className="navbar navbar-expand-md bg-light bsb-navbar bsb-navbar-hover bsb-navbar-caret">
            <StyledUnOrderedList>
                <li className="nav-item dropdown">
                    <StyledLink className="nav-link dropdown-toggle drop_down_anchor" href="javascript:void(0)" id="accountDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"></StyledLink>
                    <ul className="dropdown-menu border-0 shadow bsb-zoomIn" aria-labelledby="accountDropdown">
                        <li><a className="dropdown-item" href="javascript:void(0)">Log in</a></li>
                        <li><a className="dropdown-item" href="javascript:void(0)">Lost Password?</a></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item" href="javascript:void(0)">Sign up</a></li>
                    </ul>
                </li>
            </StyledUnOrderedList>
        </StyledNav>
    </>
    )
}
