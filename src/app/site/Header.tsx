'use client'
import UpperHeader from '../components/DesktopHeader/UpperHeader'
import LowerHeader from '../components/DesktopHeader/LowerHeader'
import React, { useState, useEffect } from 'react';
const Header = () => {
   return (
      <header className='py-3'>
        <div className='container-fluid'>
            <UpperHeader />
            <LowerHeader />
        </div>
      </header>
   )
}

export default Header