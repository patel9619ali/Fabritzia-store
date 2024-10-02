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

const CollectionsSlider = ({ collection }: CollectionsSliderProps) => {
  const settings = {
    dots: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,
  };
  const pathname = usePathname();
  const handlePath = pathname.split('/').pop();
  if(collection.handle !== handlePath){
    notFound();
  }
  let [view,setView] = useState(4);

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
  console.log(view,"view");
  return (
    <>
    <div className="col-lg-8">
    <ViewTheComponent view={view} setView={setView}/>
      <CardWrapper key={collection.id} className="row">
          {collection.products.map((product: any) => {
             const firstVariant = product.variants[0];
             const price = firstVariant.price;
             const selectedOptions = firstVariant.selectedOptions;
            const slugForProduct = createSlugProduct(product.handle);
          return (
            <Card className={`col-lg-${view} p-0 border-0`} key={product.id}>
              <CustomLink href={`/collections/${handlePath}/products/${slugForProduct}`}>
                <SliderWrapper className="me-lg-3 ms-lg-0 mx-3 mb-3">
                  <Slider key={product.id} {...settings}>
                    {product.images.map((image: any, imgIndex: number) => (
                      <CardImage key={imgIndex} className="w-100 opacity-1" src={image.src} alt={`Image of ${image.title}`} width={450} height={200}/>
                    ))}
                  </Slider>      
                  <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Title>{price}</Card.Title>
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
                      