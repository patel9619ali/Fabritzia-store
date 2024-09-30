import ProductData from "@/app/components/Products/Products";
import { Metadata } from "next";
import { fetchProducts } from '../../../../api/fetchProducts';

type Props = {
  params:{products:string}
}
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: ``,
    description: ``,
  };
}



export default async function ProductDetails({params}:Props) {
    const productDataApi = await fetchProducts({params});
    return (
      <>
       <ProductData productDataApi={productDataApi}/>
      </>
    );
}
