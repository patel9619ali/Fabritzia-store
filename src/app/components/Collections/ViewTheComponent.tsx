'use client';
import { useState } from "react";
import styled from "styled-components";
type Props = {
    view: any;
    setView: any;
    mobileView: any;
    setMobileView: any;
  };
  
const FlexWrapper = styled.div`
`;
const ViewText = styled.h3`
font-size: 15px;
color: rgb(0 0 0 / 65%);
`;
const TwoGridViewerDesktop = styled.div`

&.active{border: 1px solid #dcdcdc!important;}
cursor: pointer;
&.active span{
    border: 3px solid #000!important;
}
span{
    border: 3px solid #dcdcdc;
    height: 15px;
    display: inline-block;
}
&:hover{
border: 1px solid #dcdcdc!important;
}
&:hover span{
border: 3px solid #000;
}
span:not(:last-child){
    margin-right: 10px;
}
`;
const ThreeGridViewerDesktop = styled.div`

&.active{border: 1px solid #dcdcdc!important;}
cursor: pointer;
&.active span{
    border: 3px solid #000;
}
span{
    border: 3px solid #dcdcdc;
    height: 15px;
    display: inline-block;
}
&:hover{
border: 1px solid #dcdcdc!important;
}
&:hover span{
border: 3px solid #000;
}
span:not(:last-child){
    margin-right: 10px;
}
`;
const FourGridViewerDesktop = styled.div`

&.active{border: 1px solid #dcdcdc!important;}
cursor: pointer;
&.active span{
    border: 3px solid #000;
}
span{
    border: 3px solid #dcdcdc;
    height: 15px;
    display: inline-block;
}
&:hover{
border: 1px solid #dcdcdc!important;
}
&:hover span{
border: 3px solid #000;
}
span:not(:last-child){
    margin-right: 10px;
}
`;
const TwoGridViewerMobile = styled.div`

&.active{border: 1px solid #dcdcdc!important;}
cursor: pointer;
&.active span{
    border: 3px solid #000;
}
&.hover{
border: 1px solid #dcdcdc!important;
}
span{
    border: 3px solid #dcdcdc;
    height: 15px;
    display: inline-block;
}
span:not(:last-child){
    margin-right: 10px;
}
`;
const ThreeGridViewerMobile = styled.div`

&.active{border: 1px solid #dcdcdc!important;}
cursor: pointer;
&.active span{
    border: 3px solid #000;
}
span{
    border: 3px solid #dcdcdc;
    height: 15px;
    display: inline-block;
}
span:not(:last-child){
    margin-right: 10px;
}
`;
const FourGridViewerMobile = styled.div`

&.active{border: 1px solid #dcdcdc!important;}
cursor: pointer;
&.active span{
    border: 3px solid #000;
}
span{
    border: 3px solid #dcdcdc;
    height: 15px;
    display: inline-block;
}
span:not(:last-child){
    margin-right: 10px;
}
`;
export default function ViewTheComponent({view,setView,setMobileView,mobileView}:Props){
    let [active,setActive] = useState('');
    return(
        <>
            <FlexWrapper className="d-flex align-items-center mb-3">
                <ViewText className="me-3 mb-0">View As</ViewText>
                <TwoGridViewerDesktop className={`${view == `6` ? 'active' : ''} px-2 py-1 me-3 d-md-block d-none`} onClick={()=> {setView(6);setActive(`6`)}}>
                    <span></span>
                    <span></span>
                </TwoGridViewerDesktop>
                <ThreeGridViewerDesktop className={`${view == `4` ? 'active' : ''} px-2 py-1 me-3 d-md-block d-none`} onClick={()=> {setView(4);setActive(`4`)}}>
                    <span></span>
                    <span></span>
                    <span></span>
                </ThreeGridViewerDesktop>
                <FourGridViewerDesktop className={`${view == `3` ? 'active' : ''} px-2 py-1 d-md-block d-none`} onClick={()=> {setView(3);setActive(`3`)}}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </FourGridViewerDesktop>
                <TwoGridViewerMobile className={`${mobileView === `12` ? 'active' : ''} px-2 py-1 me-3 d-md-none d-block`} onClick={()=> {setMobileView(12);setActive(`12`)}}>
                    <span></span>
                </TwoGridViewerMobile>
                <ThreeGridViewerMobile className={`${mobileView === `6` ? 'active' : ''} px-2 py-1 me-3 d-md-none d-block`} onClick={()=> {setMobileView(6);setActive(`6`)}}>
                    <span></span>
                    <span></span>
                </ThreeGridViewerMobile>
                <FourGridViewerMobile className={`${mobileView === `4` ? 'active' : ''} px-2 py-1 d-md-none d-block`} onClick={()=> {setMobileView(4);setActive(`4`)}}>
                    <span></span>
                    <span></span>
                    <span></span>
                </FourGridViewerMobile>
            </FlexWrapper>
        </>
    )
}