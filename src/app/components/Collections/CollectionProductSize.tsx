import styled from "styled-components";

type Props = {
  variant: {
    price: string;
    availableForSale: boolean;
    selectedOptions: { name: string; value: string }[];
  };
};

const SpanSize = styled.span`

  font-size: 16px;
  margin-right: 5px;
  padding: 2px;
  color: #dcdcdc;
  cursor: no-drop;
&.available_for_sale{
    color: #000!important;
    cursor: pointer!important;
}
}`;

export default function CollectionProductSize({ variant }: Props) {
  const sizes = variant.selectedOptions.filter(option => option.name === "Size");
  const color = variant.selectedOptions.find(option => option.name === "Color");
  return (
    <>
      {sizes.map((size, index) => (
        <SpanSize className={`${variant.availableForSale? "available_for_sale":""}`} key={index}>{size.value}</SpanSize>
      ))}
    </>
  );
}
