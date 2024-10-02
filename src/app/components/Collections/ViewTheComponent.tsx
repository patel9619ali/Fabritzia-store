'use client';
import { useState } from "react";
import styled from "styled-components";
type Props = {
    view: any;
    setView: any;
  };
  
const FlexWrapper = styled.div`
`;
const ViewText = styled.h3`
font-size: 15px;
color: rgb(0 0 0 / 65%);
`;
const TwoGridViewer = styled.div`

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
const ThreeGridViewer = styled.div`

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
const FourGridViewer = styled.div`

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
export default function ViewTheComponent({view,setView}:Props){
    let [active,setActive] = useState('');
    return(
        <>
            <FlexWrapper className="d-flex align-items-center mb-3">
                <ViewText className="me-3 mb-0">View As</ViewText>
                <TwoGridViewer className={`${active === `6` ? 'active' : ''} px-2 py-1 me-3`} onClick={()=> {setView(6);setActive(`6`)}}>
                    <span></span>
                    <span></span>
                </TwoGridViewer>
                <ThreeGridViewer className={`${active === `4` ? 'active' : ''} px-2 py-1 me-3`} onClick={()=> {setView(4);setActive(`4`)}}>
                    <span></span>
                    <span></span>
                    <span></span>
                </ThreeGridViewer>
                <FourGridViewer className={`${active === `3` ? 'active' : ''} px-2 py-1`} onClick={()=> {setView(3);setActive(`3`)}}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </FourGridViewer>
            </FlexWrapper>
        </>
    )
}