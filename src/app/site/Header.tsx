'use client'
import DesktopHeader from '../components/DesktopHeader/DesktopHeader'
import MobileHeader from '../components/MobileHeader/MobileHeader'
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
const StyledHeader = styled.div`
border-bottom: .1rem solid rgba(18, 18, 18,.08);
@media (max-width: 767px){
   border-bottom: none!important;
}
`;
const Header = () => {
   return (
      <header className='py-md-3 p-0'>
        <StyledHeader className='container-fluid'>
            <DesktopHeader className="d-none d-md-block desktop_header_wrapper"/>
            <MobileHeader className="d-block d-md-none mobile_header_wrapper"/>
        </StyledHeader>
      </header>
   )
}

export default Header