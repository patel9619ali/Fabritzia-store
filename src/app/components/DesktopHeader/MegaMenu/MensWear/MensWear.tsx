import React, {useEffect} from "react";
import {GlobalStyle} from "../../GlobalStyle"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function MenWear(){
  return (
    <>
    <GlobalStyle />
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle drop_down_anchor" href="#!" id="accountDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Men</a>
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
   
       

        
    
