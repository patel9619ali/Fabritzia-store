'use client'
import UpperHeader from '../components/DesktopHeader/UpperHeader'
import React, { useState, useEffect } from 'react';
const Header = () => {
   return (
      <header className='py-3'>
        <div className='container-fluid'>
            <UpperHeader />
        </div>
      </header>
   )
}

export default Header