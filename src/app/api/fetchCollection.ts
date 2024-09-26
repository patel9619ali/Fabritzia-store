import { image } from '@nextui-org/react';
import { CollectionData } from '../models/CollectionType';
import { shopifyClient } from '../utils/shopify'; 

export const fetchShopifyCollections = async () => {
  const query = `
    {
      collections (first: 5) {
        edges {
          node {
            id
            title
            image {
              id
              src
              width
              height
            }
          }
        }
      }
    }
  `;

  try {
    const response = await shopifyClient(query);
    const data = await response.json();

    if (!response.ok || data.errors) {
      console.error('Error fetching Shopify collections:', data.errors || response.statusText);
      throw new Error(data.errors ? data.errors[0].message : 'Failed to fetch Shopify collections');
    }

    const collections: CollectionData[] = data.data.collections.edges.map((edge: any) => ({
      id: edge.node.id,
      title: edge.node.title,
      image: edge.node.image ? { id: edge.node.image.id, src: edge.node.image.src, width: edge.node.image.width, height: edge.node.image.height } : null,
    }));

    return collections;
  } catch (error) {
    console.error('An error occurred:', error);
    throw error;
  }
};
