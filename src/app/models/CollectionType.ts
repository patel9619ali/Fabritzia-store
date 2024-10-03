export interface CollectionImage {
  id: string;
  src: string;
  height: number;
  width: number;
}

export interface CollectionMetaData {
  title: string;
  description: string;
}
export interface CollectionCategoryName {
  name: string;
}

// This represents a single product in a collection
export type CollectionProductData = {
  id: string;
  title: string;
  images: CollectionProductImage[] | null; // Array of images or null if no images
  handle: string;
  vendor: string;
  productType: string;
  category: CollectionCategoryName[] | null;
};

// Represents the individual images of a product
export type CollectionProductImage = {
  id: string;
  src: string;
  height: number;
  width: number;
  altText: string;
};

// Represents a single collection's data
export type CollectionData = {
  id: string | null;
  title: string | null;
  seo: CollectionMetaData | null; 
  products: CollectionProductData[] | null; 
  handle: string;
};
