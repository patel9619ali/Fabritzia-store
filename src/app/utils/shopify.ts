
import { ProductData } from '../models/Product';
export const fetchShopifyProducts = async () => {
    const query = `
      {
        products(first: 5) {
          edges {
            node {
              id
              title
              productType
            }
          }
        }
      }
    `;
  
    try {
      const response = await fetch(process.env.SHOPIFY_API_URL!, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Access-Token': process.env.SHOPIFY_ACCESS_TOKEN!,
        },
        body: JSON.stringify({ query }),
      });
  
      const data = await response.json();
      console.log(data,"Data")
      if (!response.ok || data.errors) {
        console.error('Error fetching Shopify products:', data.errors || response.statusText);
        throw new Error(data.errors ? data.errors[0].message : 'Failed to fetch Shopify products');
      }
      const products: ProductData[] = data.data.products.edges.map((edge: any) => ({
        id: edge.node.id,
        title: edge.node.title,
        productType: edge.node.productType,
    }));
      return products;
    } catch (error) {
      console.error('An error occurred:', error);
      throw error;
    }
  };
  