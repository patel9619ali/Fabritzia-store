import { ProductsData } from '../models/ProductsTypes';
import { shopifyClient } from '../utils/shopify'; 
import notFound from "../not-found"

type Props = {
  params: {
    products: string;
  };
};

export const fetchProducts = async ({ params }: Props) => {
  const query = `
  {
  productByHandle(handle: "${params.products}") {
    id
    title
    images (first: 10) {
      nodes {
        altText
        height
        width
        id
        src
      }
    }
    seo {
      description
      title
    }
    handle
  }
}
`
  
  try {
    const response = await shopifyClient(query);
    const data = await response.json();
  
    // Check for errors in the response
    if (!response.ok || data.errors) {
      console.error('Error fetching Shopify product:', data.errors || response.statusText);
      throw new Error(data.errors ? data.errors[0].message : 'Failed to fetch Shopify products');
    }
  
    const product = data.data.productByHandle;
    console.log(product);
    // Check if collection is null or undefined
    if (!product) {
      console.error(`Collection with handle "${params.products}" not found.`);
      return notFound(); // Handle collection not found, like redirecting to a 404 page
    }

    // Map the data to CollectionData type
    const products: ProductsData = {
      id: product.id || null,
      title: product.title || null,
      seo: product.seo
        ? {
            title: product.seo.title,
            description: product.seo.description,
          }
        : null,
        images: product.images.nodes.map((img: any) => ({
          id: img.id,
          src: img.src,
          height: img.height,
          width: img.width,
          altText: img.altText,
        })),
        handle: product.handle || null,
    };
  
    return products;
  } catch (error) {
    console.error('An error occurred:', error);
    throw error;
  }
};
