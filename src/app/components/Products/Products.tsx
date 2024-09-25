import React from "react";
import { ProductData } from "../../models/Product"


const Product = ({ prod, sliderValue }: { prod: ProductData, sliderValue: number }) => {
   console.log(prod,"prods");
   console.log(sliderValue,"sliderValues");
   return (
    <>
    <h1 className="text-center">Products</h1>
    </>
 );
}



export default Product;