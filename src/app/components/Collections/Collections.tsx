import { fetchShopifyCollectionsProducts } from '../../api/fetchCollectionProducts';
import CollectionsSlider from "./CollectionsSlider";
import {FilterAll} from "../../components/FilterAll/FilterAll";
type Props = {
  params:{ collections:string}
}

export default async function CollectionDetails({params}:Props) {
  const collectionsProducts = await fetchShopifyCollectionsProducts({params});
    return (
        <div className="container">
          <div className="row">
              <FilterAll params={params}/>
              <CollectionsSlider collection={collectionsProducts}/>
          </div> 
        </div>
    );
}
      
