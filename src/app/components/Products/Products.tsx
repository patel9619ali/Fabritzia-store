// src/app/products/page.tsx
type Props = {
  productDataApi: any;
}

export default function ProductData({productDataApi}:Props) {
  console.log(productDataApi,"productsAPI")
  return (
    <div>
      <h1>{productDataApi.title}</h1>
    </div>
  );
}
