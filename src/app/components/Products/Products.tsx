// src/app/products/page.tsx
import { fetchShopifyProducts } from '../../utils/shopify';

export default async function ProductsPage() {
  const products = await fetchShopifyProducts();
  console.log(products,"SHOPIFY_API_URL")
  return (
    <div>
      <h1>Shopify Products</h1>
      <ul>
        {products.map((product: any) => (
          <li key={product.id}>
            <h2>{product.title}</h2>
            <p>Type: {product.productType}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
