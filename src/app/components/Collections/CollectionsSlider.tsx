'use client';
import { Image } from "@nextui-org/react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from 'react-bootstrap/Card';
import { usePathname,notFound } from 'next/navigation';
import { Link } from "@nextui-org/react";
import { createSlugProduct } from "@/app/utils/createSlugProduct";
import CollectionProductSize from "../Collections/CollectionProductSize";
import { useState } from "react";
import ViewTheComponent from "./ViewTheComponent";

interface CollectionsSliderProps {
    collection: any;
}
const CardTitle = styled(Card.Title)`
    font-style: normal;
    font-weight: 400;
    text-transform: capitalize;
    font-size: 16px;
  `;
  const CardPrice = styled(Card.Title)`
    font-style: normal;
    font-weight: 700;
    text-transform: capitalize;
    font-size: 16px;
  `;
  const CardWrapper = styled.div`
  `;
  const CardImage = styled(Image)`
  object-fit: cover;
  
  `;
  const SliderWrapper = styled.div`
    
    box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.09)!important;
    &:hover{
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.09) !important;
    }
  `;
  const CustomLink = styled.a`
  color: #3d4246;
  text-decoration: none;
  `;
  const SliderImageWrapper = styled(Slider)`
    .slick-slide div div {
      max-width: 100%!important;
    }
  `;
const CollectionsSlider = ({ collection }: CollectionsSliderProps) => {
  const settings = {
    dots: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: false,
    arrows: false,
    autoplaySpeed: 2000,
  };
  const pathname = usePathname();
  const handlePath = pathname.split('/').pop();
  if(collection.handle !== handlePath){
    notFound();
  }
  let [view,setView] = useState(6);
  let [mobileView,setMobileView] = useState(6);


  
  return (
    <>
    <div className="col-lg-10">
    <ViewTheComponent view={view} setView={setView} mobileView={mobileView} setMobileView={setMobileView}/>
      <CardWrapper key={collection.id} className="row">
          {collection.products.map((product: any) => {
             const firstVariant = product.variants[0];
             const price = Math.round(firstVariant.price);
             const selectedOptions = firstVariant.selectedOptions;
            const slugForProduct = createSlugProduct(product.handle);
          return (
            <Card className={`col-md-${view} col-${mobileView} p-0 border-0`} key={product.id}>
              <CustomLink href={`/collections/${handlePath}/products/${slugForProduct}`}>
                <SliderWrapper className="me-lg-3 ms-lg-0 mx-3 mb-3">
                  <SliderImageWrapper key={product.id} {...settings}>
                    {product.images.map((image: any, imgIndex: number) => (
                      <CardImage key={imgIndex} className="w-100 opacity-1" src={image.src} alt={`Image of ${image.title}`} width={450} height={200}/>
                    ))}
                  </SliderImageWrapper>      
                  <Card.Body>
                  <CardTitle>{product.title}</CardTitle>
                  <CardPrice>₹ {price}</CardPrice>
                  {selectedOptions[1] && <p>{selectedOptions[1].value}</p>}
                  {product.variants.map((variant: any, index: number) => {
                      return (
                        <CollectionProductSize key={index} variant={variant}/>
                      );
                  })}
                  </Card.Body>    
                </SliderWrapper>  
              </CustomLink>
            </Card> 
            );
        })}  
      </CardWrapper>
      </div>
      </> 
    );
  };
export default CollectionsSlider;
                      