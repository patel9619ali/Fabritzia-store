// src/app/products/page.tsx
type Props = {
  params:{slugProductName:string}
  productDataApi: any;
}

export default function ProductData({params,productDataApi}:Props) {
  return (
    <div>
      <h1>Shopify Products</h1>
    </div>
  );
}
