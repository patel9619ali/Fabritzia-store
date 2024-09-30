import { CollectionData } from '../models/CollectionType';
import { shopifyClient } from '../utils/shopify'; 
import notFound from "../not-found"

type Props = {
  params: {
    collections: string;
  };
};

export const fetchShopifyCollectionsProducts = async ({ params }: Props) => {
  const query = `
  {
    collectionByHandle(handle: "${params.collections}") {
      id
      title
      products(first: 55) {
        nodes {
          id
          title
          images(first: 10) {
            nodes {
              height
              altText
              id
              src
              width
            }
          }
          seo {
            description
            title
          }
          handle
        }
      }
      seo {
        title
        description
      }
      handle
    }
  }`;
  
  try {
    const response = await shopifyClient(query);
    const data = await response.json();
  
    // Check for errors in the response
    if (!response.ok || data.errors) {
      console.error('Error fetching Shopify collections:', data.errors || response.statusText);
      throw new Error(data.errors ? data.errors[0].message : 'Failed to fetch Shopify collections');
    }
  
    const collection = data.data.collectionByHandle;

    if (!collection) {
      console.error(`Collection with handle "${params.collections}" not found.`);
      return notFound(); 
    }


    const collections: CollectionData = {
      id: collection.id || null,
      title: collection.title || null,
      seo: collection.seo
        ? {
            title: collection.seo.title,
            description: collection.seo.description,
          }
        : null,
      products: collection.products.nodes.map((product: any) => ({
        id: product.id,
        title: product.title,
        images: product.images.nodes.map((img: any) => ({
          id: img.id,
          src: img.src,
          height: img.height,
          width: img.width,
          altText: img.altText,
        })),
        handle: product.handle,
      })),
      handle: collection.handle,
    };
  
    return collections;
  } catch (error) {
    console.error('An error occurred:', error);
    throw error;
  }
};
