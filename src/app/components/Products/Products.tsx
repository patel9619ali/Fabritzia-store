// src/app/products/page.tsx
type Props = {
  productDataApi: any;
}

export default function ProductData({productDataApi}:Props) {
  return (
    <div>
      <h1>{productDataApi.title}</h1>
    </div>
  );
}
