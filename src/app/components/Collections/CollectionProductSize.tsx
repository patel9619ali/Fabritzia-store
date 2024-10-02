import styled from "styled-components";

type Props = {
  variant: {
    price: string;
    availableForSale: boolean;
    selectedOptions: { name: string; value: string }[];
  };
};

const SpanSize = styled.span`
  border: 1px solid black;
  color: #fff;
  font-size: 12px;
  background: grey;
  margin-right: 5px;
  padding: 2px;
&.available_for_sale{
 
    font-weight: 800;
    color: #000;
    cursor: no-drop;
}
}`;

export default function CollectionProductSize({ variant }: Props) {
//   console.log(variant.selectedOptions[1],"Variant")
  // Extract the size and color options from the variant
  const sizes = variant.selectedOptions.filter(option => option.name === "Size");
  const color = variant.selectedOptions.find(option => option.name === "Color");
//   console.log(color,"color")
  return (
    <>
      {/* Render price and color only once */}
      {/* {color && <p>Color: {color.value[0]}</p>} */}
      {/* <p>Price: {color}</p> */}

      {/* Render sizes */}
      {sizes.map((size, index) => (
        <SpanSize className={`${variant.availableForSale? "available_for_sale":""}`} key={index}>{size.value}</SpanSize>
      ))}
    </>
  );
}
