'use client'
import React, { useState, useEffect } from 'react';
import MobileNavBar from '../MobileHeader/MobileNavBar/MobileNavBar'
import MobileNavMegaMenu from '../MobileHeader/MobileNavBar/MobileNavMegaMenu';
import styled from 'styled-components';
type Props = {
    className: string;
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
    searchValue: any;
    setSearchValue: any;
};
const StyledMobileNavBar = styled(MobileNavBar)`
box-shadow:0 1px 2px 0 rgba(148,150,159,.3)
`
const MobileHeader = ({className,show,setShow,searchValue,setSearchValue}:Props) => {
   return (
    <>
        <div className={className}>
            <StyledMobileNavBar className="mobile_header_top_navbar" show={show} setShow={setShow} searchValue={searchValue} setSearchValue={setSearchValue}/>
        </div>
         <MobileNavMegaMenu className=""/>
         </>)
}

export default MobileHeader;