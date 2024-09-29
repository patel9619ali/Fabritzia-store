'use client';
import { Image } from "@nextui-org/react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from 'react-bootstrap/Card';
import { usePathname } from 'next/navigation';

interface CollectionsSliderProps {
    collection: any;
}
const CollectionsSlider = ({ collection }: CollectionsSliderProps) => {
  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: false,
    arrows: false,
    autoplaySpeed: 1000,
  };
  const pathname = usePathname();
  const handlePath = pathname.split('/').pop();

  if (collection.handle !== handlePath) {
    return null;
  }
  const CardWrapper = styled.div`
  `;
  const CardImage = styled(Image)`
  object-fit: cover;
  border-radius: 10px 10px 0 0!important
  `;
  const SliderWrapper = styled.div`
    border-radius: 10px!important;
    box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.09)!important;
    &:hover{
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.09) !important;
    }
  `;
  return (
    <CardWrapper key={collection.id} className="row">
        {collection.products.map((product: any) => {
        return (
          <Card className="col-lg-4 p-0 border-0" key={product.id}>
            <SliderWrapper className="me-lg-3 ms-lg-0 mx-3 mb-3">
              <Slider key={product.id} {...settings}>
                {product.images.map((image: any, imgIndex: number) => (
                  <CardImage key={imgIndex} className="w-100 opacity-1" src={image.src} alt={`Image of ${image.title}`} width={450} height={200}/>
                ))}
              </Slider>      
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text> Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
              </Card.Body>    
            </SliderWrapper>  
          </Card> 
          );
      })}  
    </CardWrapper>
    );
  };
export default CollectionsSlider;
                  
              

{/* <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </Card.Text>
  </Card.Body>
</Card> */}