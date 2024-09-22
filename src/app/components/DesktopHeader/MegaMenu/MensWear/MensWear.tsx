import React, {useEffect} from "react";
import {GlobalStyle} from "../../GlobalStyle"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function MenWear(){
  return (
    <>
    <GlobalStyle />
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle drop_down_anchor" href="javascript:void(0)" id="accountDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Men</a>
            <ul className="dropdown-menu border-0 shadow bsb-zoomIn" aria-labelledby="accountDropdown">
            <li><a className="dropdown-item" href="javascript:void(0)">Log in</a></li>
            <li><a className="dropdown-item" href="javascript:void(0)">Lost Password?</a></li>
            <li>
                <hr className="dropdown-divider"/>
            </li>
            <li><a className="dropdown-item" href="javascript:void(0)">Sign up</a></li>
            </ul>
        </li>
    </>
    );
}
   
       

        
    
