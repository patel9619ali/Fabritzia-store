import React, {useEffect} from "react";
import  styled, { createGlobalStyle }  from "styled-components";
const GlobalStyle = createGlobalStyle`
  .bsb-navbar.navbar-expand-md.bsb-navbar-hover .dropdown:hover > .dropdown-menu.bsb-zoomIn,
  .bsb-navbar.navbar-expand-md.bsb-navbar-hover .dropdown:hover > .dropdown-menu.show.bsb-zoomIn {
    --bsb-animation-duration: 500ms;
    animation-duration: 500ms;
    animation-fill-mode: both;
    animation-name: bsb-zoomIn;
    }
    .bsb-navbar.navbar-expand-md.bsb-navbar-hover .dropdown:hover>.dropdown-menu, .bsb-navbar.navbar-expand-md.bsb-navbar-hover .dropdown:hover>.dropdown-menu.show 
    {
    display: block !important;
    position: fixed;
    }
    @keyframes bsb-zoomIn {
    0% {
      opacity: 0;
      transform: scale3d(0.3, 0.3, 0.3);
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: scale3d(1, 1, 1);
    }
  }
`;
export default function WomenWear(){
  return (
    <>
    <GlobalStyle />
    <ul className="navbar-nav justify-content-center flex-grow-1">
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#!" id="accountDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Womens</a>
            <ul className="dropdown-menu border-0 shadow bsb-zoomIn" aria-labelledby="accountDropdown">
            <li><a className="dropdown-item" href="#!">Log in</a></li>
            <li><a className="dropdown-item" href="#!">Lost Password?</a></li>
            <li>
                <hr className="dropdown-divider"/>
            </li>
            <li><a className="dropdown-item" href="#!">Sign up</a></li>
            </ul>
        </li>
    </ul>
    </>
    );
}
   
       

        
    
