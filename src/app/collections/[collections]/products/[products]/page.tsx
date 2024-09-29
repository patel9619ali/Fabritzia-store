import ProductData from "@/app/components/Products/Products";
import { Metadata } from "next";
import { fetchShopifyCollectionsProducts } from '../../../../api/fetchCollectionProducts';

type Props = {
  params:{slugProductName:string}
}
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: ``,
    description: ``,
  };
}



export default async function ProductDetails({params}:Props) {
    const productDataApi = await fetchShopifyCollectionsProducts();
    console.log(productDataApi,"productDataApi");
    console.log(params,"params")
    return (
      <>
       <ProductData params={params} productDataApi={productDataApi}/>
      </>
    );
}
