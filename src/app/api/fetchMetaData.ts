import { MetaDataTypes } from '../models/MetaDataTypes';
import { shopifyClient } from '../utils/shopify'; 

export const fetchShopifyCollectionsProducts = async () => {
  const query = `
 
  
`;

  try {
    const response = await shopifyClient(query);
    const data = await response.json();
    if (!response.ok || data.errors) {
      console.error('Error fetching Shopify collections:', data.errors || response.statusText);
      throw new Error(data.errors ? data.errors[0].message : 'Failed to fetch Shopify collections');
    }

    const collections: MetaDataTypes[] = data.data.collections.edges.map((edge: any) => ({
      id: edge.node.id,
      title: edge.node.title,
      seo: edge.node.seo ? { id: edge.node.seo.title, src: edge.node.seo.description } : null,
      products: edge.node.products.nodes.map((product: any) => ({
        id: product.id,
        title: product.title,
        images: product.images.nodes.map((img: any) => ({
            id: img.id,
            src: img.src,
            height: img.height,
            width: img.width,
            altText: img.altText,
          })),
      })),
      handle: edge.node.handle,
    }));
    return collections;
  } catch (error) {
    console.error('An error occurred:', error);
    throw error;
  }
};
