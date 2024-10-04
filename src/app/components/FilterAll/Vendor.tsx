import { useState } from "react";
import styled from "styled-components";
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
type Props = {
    collectionsProducts:any;
}
const SideBar = styled.div`
`;
const DropDownWrapper = styled(Dropdown.Menu)`
  width: 100%;
  border: none;
  border-bottom: 2px solid #dcdcdc;
  border-radius: 0px;
  transform: none!important;
  height:300px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;
const SideBarWrapper = styled(Dropdown)`
  border-right: 3px solid #dcdcdc;
`;
const CollectionButton = styled(Dropdown.Toggle)`
  background: #fff!important;
  color: rgb(0 0 0 / 65%);
  border: none!important;
  font-weight: 700;
  &:hover{
    color: rgb(0 0 0 / 65%);
  }
  &:focus{
    color: rgb(0 0 0 / 65%);
    }
    &.btn.show{
      color: rgb(0 0 0 / 65%);
    }
    &.dropdown-toggle::after{
      background: url('/Assets/chevron-down-solid.svg') no-repeat center!important;
      width: 10px;
      height: 10px;
      border: none;
      position: absolute;
      right: -15px;
      top: 14px; 
    }
`;
export function Vendor({collectionsProducts}:Props){
  const [isOpen, setIsOpen] = useState(true); 
    const uniqueVendor = Array.from(
        new Set(
            collectionsProducts.products
              .map(({ vendor }: any) => vendor)
              .filter((vendor: string | null) => vendor !== null) // Filter out null values
          )
      );
      const handleToggle = () => {
        setIsOpen(!isOpen); // Toggle open/closed state
    };

      console.log(uniqueVendor,"uniqueVendor")
    return(
        <>
        <SideBarWrapper className="" show={isOpen} autoClose={false}>
            <CollectionButton id="dropdown-autoclose-false" className="position-relative show" onClick={handleToggle}>
                Vendor
            </CollectionButton>
            <DropDownWrapper className="px-3 position-relative">
                <Form>
                {uniqueVendor.map((vendor: any, index: number) => {
                return (
                <Form.Check
                    key={index}
                    value={vendor}
                    label={vendor}
                    name="vendor"
                    type="checkbox"
                />
                );
            })}
                </Form>
            </DropDownWrapper>
        </SideBarWrapper>
        </>
    )
}