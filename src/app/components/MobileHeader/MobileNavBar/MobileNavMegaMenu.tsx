'use client'
import React, { useState, useEffect } from 'react';
import { GlobalMobileHeaderStyle } from '../../DesktopHeader/GlobalMobileHeaderStyle';
type Props = {
    className: string;
};
const MobileNavMegaMenu = ({className}:Props) => {
   return (
    <>
    <GlobalMobileHeaderStyle />
    <div className="offcanvas offcanvas-end offcanvas_wrapper" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
        <div className="offcanvas-body px-0 pt-0">
            <div>Hello</div>
        </div>
    </div>
    </>
   )
}

export default MobileNavMegaMenu