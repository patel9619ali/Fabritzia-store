import React, {useEffect} from "react";
import {GlobalStyle} from "../../GlobalStyle"
export default function KidsWear(){
  return (
    <>
    <GlobalStyle />
        
    <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#!" id="accountDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Kids</a>
        <ul className="dropdown-menu border-0 shadow bsb-zoomIn" aria-labelledby="accountDropdown">
        <li><a className="dropdown-item" href="#!">Log in</a></li>
        <li><a className="dropdown-item" href="#!">Lost Password?</a></li>
        <li>
            <hr className="dropdown-divider"/>
        </li>
        <li><a className="dropdown-item" href="#!">Sign up</a></li>
        </ul>
    </li>
    </>
    );
}
   
       

        
    
