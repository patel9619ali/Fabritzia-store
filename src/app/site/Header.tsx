'use client'
import UpperHeader from '../components/DesktopHeader/UpperHeader'
import LowerHeader from '../components/DesktopHeader/LowerHeader'
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
const StyledHeader = styled.div`
border-bottom: .1rem solid rgba(18, 18, 18,.08)

`;
const Header = () => {
   return (
      <header className='py-3'>
        <StyledHeader className='container-fluid'>
            <UpperHeader />
            <LowerHeader />
        </StyledHeader>
      </header>
   )
}

export default Header