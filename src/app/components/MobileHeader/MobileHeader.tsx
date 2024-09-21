'use client'
import React, { useState, useEffect } from 'react';
import SearchBox from '../DesktopHeader/SearchBox/SearchBox';
type Props = {
    className: string;
};
const MobileHeader = ({className}:Props) => {
   return (
        <div className={className}>
            <SearchBox className="col-12 text-center"/>
        </div>
   )
}

export default MobileHeader