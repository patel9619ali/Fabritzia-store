"use client";
import Breadcrumb from 'react-bootstrap/Breadcrumb'; 
import { usePathname } from 'next/navigation';
import {createTitleFromSlug} from "../../utils/createTitleFromSlug"

type Props = {
    params:{
      collections:string,
    }
  }

export default function BreadcrumbComponent({params}:Props) {
    const pathName = usePathname();
    let values = Object.values(params);
    let keys = Object.keys(params);
    const valueWithTitle = values.map((key,index)=>{
        return createTitleFromSlug(key)
    })
    return (
        <Breadcrumb>
            <Breadcrumb.Item href="/">
            Home
            </Breadcrumb.Item>
            {values.map((value, index) =>{
              const isLast = index === values.length - 1;
              return isLast ? (
                <Breadcrumb.Item key={index} active>{valueWithTitle[index]}</Breadcrumb.Item>
            ):
                <Breadcrumb.Item href={`/${keys[index]}/${value}`} key={index}>{valueWithTitle[index]}</Breadcrumb.Item>
            }
        )}
            
        </Breadcrumb>
    );
}
{/* <Breadcrumb.Item key={index}>{key}{index}</Breadcrumb.Item> */}
{/* <Breadcrumb.Item href={`/${pathName}`}>
Library
</Breadcrumb.Item>
<Breadcrumb.Item active>Data</Breadcrumb.Item> */}
