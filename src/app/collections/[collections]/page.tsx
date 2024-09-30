import { Metadata } from "next";
import CollectionsData from "../../components/Collections/Collections";

type Props = {
  params:{
    collections:string
  }
}
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: ``,
    description: ``,
  };
}


export default function CollectionDetails({params}:Props) {
    return (
      <>
        <CollectionsData params={params}/>
      </>
    );
}
