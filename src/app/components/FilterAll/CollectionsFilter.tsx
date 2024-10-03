'use client';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';

const SideBar = styled.div`
`;
const DropDownWrapper = styled(Dropdown.Menu)`
  width: 100%;
  border: none;
  border-bottom: 2px solid #dcdcdc;
  height: 300px;
  border-radius: 0px;
`;
const SideBarWrapper = styled(Dropdown)`
  border-right: 3px solid #dcdcdc;
  height: 100%;
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
type Props = {
    collectionsProducts:any;
  }


export default function CollectionsFilter({collectionsProducts}:Props){
    console.log(collectionsProducts,"ParamsNew");
    const uniqueCategories = Array.from(
        new Set(
            collectionsProducts.products
              .map(({ category }: any) => category.name)
              .filter((name: string | null) => name !== null) // Filter out null values
          )
      );
      console.log(uniqueCategories,"uniqueCategories")
    return(
    <SideBar className='col-lg-4'>
        <SideBarWrapper className="" autoClose={false}>
            <CollectionButton id="dropdown-autoclose-false" className="position-relative">
                Collections
            </CollectionButton>
            <DropDownWrapper className="px-3">
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
    </SideBar>
    )
}
