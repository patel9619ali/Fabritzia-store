import { fetchShopifyCollectionsProducts } from '../../api/fetchCollectionProducts';
import CollectionsSlider from "./CollectionsSlider";
type Props = {
  params:{ collections:string}
}


export default async function CollectionDetails({params}:Props) {
  const collectionsProducts = await fetchShopifyCollectionsProducts({params});
  // console.log(collectionsProducts,"collectionsProducts")
    return (
        <div className="container">
           <CollectionsSlider collection={collectionsProducts}/>
        </div>
    );
}
      
