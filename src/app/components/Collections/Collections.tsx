import { Metadata } from "next";
import { fetchShopifyCollectionsProducts } from '../../api/fetchCollectionProducts';
import { createSlug } from '../../utils/createSlug';
import CollectionsSlider from "./CollectionsSlider";



export default async function CollectionDetails() {
  const collectionsProducts = await fetchShopifyCollectionsProducts();

    return (
      <div className="container">
        {collectionsProducts.map((collection: any) => {
          const slug = createSlug(collection.title);
          return (
            <CollectionsSlider key={collection.id} collection={collection}/>
          );
        })}
      </div>
    );
}
