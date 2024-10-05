'use client';
import { useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import { Vendor } from './Vendor';
import { ProductType } from './ProductType';
import { ColorFilter } from './ColorFilter';
import styled from 'styled-components';
import Link from 'next/link'

const SideBar = styled.div`
`;
const ClearAll = styled.span`
    color: #F00;
    font-weight: 700;
    font-size: 12px;
    padding-right: 10px;
    cursor: pointer;
`;
const DropDownWrapper = styled(Dropdown.Menu)`
  width: 100%;
  border: none;
  border-bottom: 2px solid #dcdcdc;
  border-radius: 0px;
  transform: none!important;
  height:150px;
  font-size: 13px;
  input.form-check-input{
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-top: 6px;
  }
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
const FilterText = styled.span`
font-size: 16px;
font-weight: 600;
`;
const FilterWrapper = styled.div`
  border-bottom:1px solid #e9e9ed;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;
const CollectionButton = styled(Dropdown.Toggle)`
  background: #fff!important;
  color: rgb(0 0 0 / 65%);
  border: none!important;
  font-weight: 700;
  font-size: 15px;
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
      width: 8px;
      height: 8px;
      border: none;
      position: absolute;
      right: -20px;
      top: 13px;
    }
`;
type Props = {
    collectionsProducts:any;
    className:string,
}


export default function CollectionsFilter({collectionsProducts,className}:Props){
  const [isOpen, setIsOpen] = useState(true); 
    const uniqueCategories = Array.from(
        new Set(
            collectionsProducts.products
              .map(({ category }: any) => category.name)
              .filter((name: string | null) => name !== null) // Filter out null values
          )
      );
      const handleToggle = () => {
        setIsOpen(!isOpen); 
    };
    return(
    <SideBar className={`${className} col-lg-2`}>
      <FilterWrapper className="pb-2">
        <FilterText className="ps-2">Filter</FilterText>
        <ClearAll>Clear All</ClearAll>
      </FilterWrapper>

        <SideBarWrapper className="" show={isOpen} autoClose={false}>
            <CollectionButton id="dropdown-autoclose-false" className="position-relative show ps-2" onClick={handleToggle}>
                Collections
            </CollectionButton>
            <DropDownWrapper className="px-3 position-relative">
                <Form>
                {uniqueCategories.map((categoryName: any, index: number) => {
                return (
                <Form.Check
                    key={index}
                    value={categoryName}
                    label={categoryName}
                    name="collection"
                    type="checkbox"
                />
                );
            })}
                </Form>
            </DropDownWrapper>
        </SideBarWrapper>
        <Vendor collectionsProducts={collectionsProducts}/>
        <ProductType collectionsProducts={collectionsProducts}/>
        <ColorFilter collectionsProducts={collectionsProducts}/>
    </SideBar>
    )
}
