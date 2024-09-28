import { Metadata } from "next";
import { fetchShopifyCollectionsProducts } from '../../api/fetchCollectionProducts';
import { createSlug } from '../../utils/createSlug';
import CollectionsSlider from "./CollectionsSlider";



export default async function CollectionDetails() {
  const collectionsProducts = await fetchShopifyCollectionsProducts();
  console.log(collectionsProducts,"collectionsProducts");
    return (
      <div className="container">
        {collectionsProducts.map((collection: any) => {
          const slug = createSlug(collection.title);
          return (
            <div key={collection.id} className="row">
              {collection.products.map((product: any) => {
                return (
                    <CollectionsSlider key={product.id} product={product}/>
                  );
              })}  
            </div>
          );
        })}
      </div>
    );
}


{/* <Image className="w-100 opacity-1" key={imgIndex} src={image.src} alt={`Image of ${image.title}`} width={500} height={200}/> */}
