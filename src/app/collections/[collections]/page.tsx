import { Metadata } from "next";
import CollectionsData from "../../components/Collections/Collections";

type Props = {
  params:{slugProductName:string}
}
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: ``,
    description: ``,
  };
}



export default function CollectionDetails() {
    return (
      <>
        <CollectionsData/>
      </>
    );
}
