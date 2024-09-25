// src/app/products/page.tsx
import { fetchShopifyProducts } from '../utils/shopify';

export default async function ProductsPage() {
  const products = await fetchShopifyProducts();
  console.log(products,"SHOPIFY_API_URL")
  return (
    <div>
      <h1>Shopify Products</h1>
      <ul>
        {products.map((product: any) => (
          <li key={product.node.id}>
            <h2>{product.node.title}</h2>
            <p>Type: {product.node.productType}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
