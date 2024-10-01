import { Metadata } from "next";
import CollectionsData from "../../components/Collections/Collections";
import {fetchShopifyCollectionsProducts} from "../../api/fetchCollectionProducts"
import BreadcrumbComponent from "../../components/Breadcrumb/Breadcrumb"

type Props = {
  params:{
    collections:string,
  }
}
export async function generateMetadata({params}:Props): Promise<Metadata> {
  const collectionsProducts = await fetchShopifyCollectionsProducts({params});
  return {
    title: ``,
    description: ``,
  };
}


export default function CollectionDetails({params}:Props) {
    return (
      <>
        <BreadcrumbComponent params={params}/>
        <CollectionsData params={params}/>
      </>
    );
}
