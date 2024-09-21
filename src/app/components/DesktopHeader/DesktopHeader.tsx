'use client'
import UpperHeader from './UpperHeader';
import LowerHeader from './LowerHeader';
import React, { useState, useEffect } from 'react';
type Props = {
    className: string;
};
const DesktopHeader = ({className}:Props) => {
   return (
        <div className={className}>
            <UpperHeader/>
            <LowerHeader/>
        </div>
   )
}

export default DesktopHeader