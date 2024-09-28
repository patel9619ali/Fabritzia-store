'use client'
import UpperHeader from './UpperHeader';
import LowerHeader from './LowerHeader';
import React, { useState, useEffect } from 'react';
type Props = {
    className: string;
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
    searchValue: any;
    setSearchValue: any;
};
const DesktopHeader = ({className,show,setShow,searchValue,setSearchValue}:Props) => {
   return (
        <div className={className}>
            <UpperHeader show={show} setShow={setShow} searchValue={searchValue} setSearchValue={setSearchValue}/>
            <LowerHeader/>
        </div>
   )
}

export default DesktopHeader