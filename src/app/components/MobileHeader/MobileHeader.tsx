'use client'
import React, { useState, useEffect } from 'react';
import SearchBox from '../DesktopHeader/SearchBox/SearchBox';
import MobileNavBar from '../MobileHeader/MobileNavBar/MobileNavBar'
import MobileNavMegaMenu from '../MobileHeader/MobileNavBar/MobileNavMegaMenu';

type Props = {
    className: string;
};
const MobileHeader = ({className}:Props) => {
   return (
    <>
        <div className={className}>
            <MobileNavBar className="mobile_header_top_navbar"/>
            <SearchBox className="col-12 text-center"/>
        </div>
         <MobileNavMegaMenu className=""/>
         </>)
}

export default MobileHeader