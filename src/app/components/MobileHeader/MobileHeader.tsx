'use client'
import React, { useState, useEffect } from 'react';
import SearchBox from '../DesktopHeader/SearchBox/SearchBox';
import MobileNavBar from '../MobileHeader/MobileNavBar/MobileNavBar'
import MobileNavMegaMenu from '../MobileHeader/MobileNavBar/MobileNavMegaMenu';
import styled from 'styled-components';
const StyledMobileNavBar = styled(MobileNavBar)`
box-shadow:0 1px 2px 0 rgba(148,150,159,.3)
`

type Props = {
    className: string;
};
const MobileHeader = ({className}:Props) => {
   return (
    <>
        <div className={className}>
            <StyledMobileNavBar className="mobile_header_top_navbar"/>
            <SearchBox className="col-12 text-center"/>
        </div>
         <MobileNavMegaMenu className=""/>
         </>)
}

export default MobileHeader