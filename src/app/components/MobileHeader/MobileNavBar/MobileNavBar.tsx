'use client'
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

type Props= {
    className: string;
}

const StyledSpan = styled.span`
background-image: none!important;
outline: none;
border: none;
&:focus{
    outline: none!important;
}
`
const StyledButtonToggle = styled.button`
&:focus{
    outline: none!important;
    box-shadow: none!important;
}
border: none;
`
const StyledNavbar = styled.nav`
`

const MobileNavBar = ({className}:Props) => {
    const [isOpen, setIsOpen] = useState(true);
    
    const handleHamBurgerClick = () => {
        setIsOpen(!isOpen);
        const offcanvasElement = document.getElementById('offcanvasDarkNavbar');
        if (offcanvasElement) {
          if (!isOpen) {
            offcanvasElement.classList.remove('show');
          } else {
            offcanvasElement.classList.add('show');
          }
        }
      };
   return (
    <>
    <div className={`row ${className}`}>
        <div className="col-4">
        <StyledNavbar className="navbar navbar_wrapper">
            <StyledButtonToggle className="navbar-toggler pe-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
            <StyledSpan className="navbar-toggler-icon" onClick={handleHamBurgerClick}>
            {isOpen ? (
                <svg width="18" height="18" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon icon-hamburger icon_wrapper">
                    <path d="M0 5H24.0555" stroke="#121212" strokeWidth="1.20277"></path>
                    <path d="M0 12.0156H24.0555" stroke="#121212" strokeWidth="1.20277"></path>
                    <path d="M0 19.0312H24.0555" stroke="#121212" strokeWidth="1.20277"></path>
                </svg>
                ) : (
                <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" className="icon icon-close icon_wrapper" fill="none" viewBox="0 0 18 17">
                    <path d="M.865 15.978a.5.5 0 00.707.707l7.433-7.431 7.579 7.282a.501.501 0 00.846-.37.5.5 0 00-.153-.351L9.712 8.546l7.417-7.416a.5.5 0 10-.707-.708L8.991 7.853 1.413.573a.5.5 0 10-.693.72l7.563 7.268-7.418 7.417z" fill="currentColor">
                    </path>
                </svg>   
                 )}   
            </StyledSpan>
            </StyledButtonToggle>
        </StyledNavbar>
        </div>
    </div>
</>
   )
}

export default MobileNavBar