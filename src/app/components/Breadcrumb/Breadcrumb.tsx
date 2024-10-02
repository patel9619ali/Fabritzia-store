"use client";
import Breadcrumb from 'react-bootstrap/Breadcrumb'; 
import { usePathname } from 'next/navigation';
import {createTitleFromSlug} from "../../utils/createTitleFromSlug"
import styled from 'styled-components';
type Props = {
    params:{
      collections:string,
    }
  }
const HomeStyledSVG = styled.svg`
    width: 16px;
    height: 16px;
    fill: #737ac2;
`;
const BreadcrumbWrapper = styled(Breadcrumb)`
  .breadcrumb{
        align-items: baseline;
  }
`;
const BreadcrumbItem = styled(Breadcrumb.Item)`
padding: 0!important;
font-size: 12px!important;
&.breadcrumb-item::before{
content:''!important;
  background: url('/Assets/breadcrumb.svg') no-repeat center!important;
    width: 11px;
    height: 18px;
    margin: 0 5px;
    padding: 0;
    rotate: -90deg;
}
    a{
    text-decoration: none!important;
    color: #737ac2;
    }
`;


export default function BreadcrumbComponent({params}:Props) {
    const pathName = usePathname();
    let values = Object.values(params);
    let keys = Object.keys(params);
    const valueWithTitle = values.map((key,index)=>{
        return createTitleFromSlug(key)
    })
    return (
        <BreadcrumbWrapper className="container p-0 my-3">
            <Breadcrumb.Item href="/">
              <HomeStyledSVG viewBox="0 0 16 16" aria-hidden="true" className="home_page" focusable="false">
                <path d="M7.62 2.124a.498.498 0 01.372-.122.498.498 0 01.373.122l5.45 4.78a.499.499 0 01-.659.75l-.207-.182v5.501a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-3a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5v3a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V7.547l-.121.106a.499.499 0 11-.658-.75l5.45-4.78z"></path>
              </HomeStyledSVG>
            </Breadcrumb.Item>
            {values.map((value, index) =>{
              const isLast = index === values.length - 1;
              return isLast ? (
                <BreadcrumbItem key={index} active className="p-0 text-decoration-none">{valueWithTitle[index]}</BreadcrumbItem>
            ):
                <BreadcrumbItem className="text-decoration-none" href={`/${keys[index]}/${value}`} key={index}>{valueWithTitle[index]}</BreadcrumbItem>
            }
        )}
            
        </BreadcrumbWrapper>
    );
}
{/* <Breadcrumb.Item key={index}>{key}{index}</Breadcrumb.Item> */}
{/* <Breadcrumb.Item href={`/${pathName}`}>
Library
</Breadcrumb.Item>
<Breadcrumb.Item active>Data</Breadcrumb.Item> */}
