export interface CollectionImage {
    id: string;
    src: string;
    height: number;
    width: number;
  }
  
  export interface ProductsMetaData {
    title: string;
    description: string;
  }
  // Represents the individual images of a product
  export type ProductsImage = {
    id: string;
    src: string;
    height: number;
    width: number;
    altText: string;
  };
  
  // Represents a single collection's data
  export type ProductsData = {
    id: string | null;
    title: string | null;
    images: ProductsImage[] | null;
    seo: ProductsMetaData | null; 
    handle: string;
  };
  