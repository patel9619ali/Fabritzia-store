import { Metadata } from "next";
import { Image } from "@nextui-org/react";
import { fetchShopifyCollectionsProducts } from '../../api/fetchCollectionProducts';
import { createSlug } from '../../utils/createSlug';

type Props = {
  params:{slugProductName:string}
}
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


export default async function CollectionDetails() {
  const collectionsProducts = await fetchShopifyCollectionsProducts();
    return (
      <>
        {collectionsProducts.map((collection: any) => {
          const slug = createSlug(collection.title);
          return (
            <div key={collection.id}>
              {collection.products.map((product: any) => {
                return (
                  <>
                    {product.images.map((image: any, imgIndex: number) => (
                        <Image className="w-100 opacity-1" key={imgIndex} src={image.src} alt={`Image of ${image.title}`} width={500} height={200}/>
                     ))}
                  </>
                  );
              })}  
            </div>
          );
        })}
      </>
    );
}
                 
