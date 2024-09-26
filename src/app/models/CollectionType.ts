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

export type CollectionProductData = {
  id: string;
  title: string;
  images: CollectionProductImage[] | null;
}  
export type CollectionProductImage = {
  id: string;
  src: string;
  height: number;
  width: number;
  altText: string;
}  
export type CollectionData = {
    id: string;
    title: string;
    image: CollectionImage[] | null;
    seo: CollectionMetaData[] | null;
    products: CollectionProductData[] | null;
}

