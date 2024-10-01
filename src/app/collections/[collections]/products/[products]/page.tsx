import ProductData from "@/app/components/Products/Products";
import { Metadata } from "next";
import { fetchProducts } from '../../../../api/fetchProducts';
import BreadcrumbComponent from "@/app/components/Breadcrumb/Breadcrumb";

type Props = {
  params:{
    products:string,
    collections:string,
  }
}
export async function generateMetadata({params}:Props): Promise<Metadata> {
  const productDataApi = await fetchProducts({params});
  return {
    title: `${productDataApi.title}`,
    description: ``,
  };
}



export default async function ProductDetails({params}:Props) {
  const productDataApi = await fetchProducts({params});
  return (
    <>
        <BreadcrumbComponent params={params}/>
       <ProductData productDataApi={productDataApi}/>
      </>
    );
}
