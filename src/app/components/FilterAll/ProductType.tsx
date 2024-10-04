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
export function ProductType({collectionsProducts}:Props){
    const uniqueProductType = Array.from(
        new Set(
            collectionsProducts.products
              .map(({ productType }: any) => productType)
              .filter((productType: string | null) => productType !== null) // Filter out null values
          )
      );
      console.log(uniqueProductType,"uniqueProductType")
    return(
        <>
        <SideBarWrapper className="" autoClose={false}>
            <CollectionButton id="dropdown-autoclose-false" className="position-relative">
                Product Type
            </CollectionButton>
            <DropDownWrapper className="px-3 position-relative">
                <Form>
                {uniqueProductType.map((productType: any, index: number) => {
                return (
                <Form.Check
                    key={index}
                    value={productType}
                    label={productType}
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