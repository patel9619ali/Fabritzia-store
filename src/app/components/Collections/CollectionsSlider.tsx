'use client';
import { Image } from "@nextui-org/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface CollectionsSliderProps {
    product: any;
  }
const CollectionsSlider = ({ product }: CollectionsSliderProps) => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 1000,
  };

  return (
      <Slider {...settings} className="col-lg-4 mb-5">
        {product.images.map((image: any, imgIndex: number) => (
            <Image className="w-100 opacity-1" key={imgIndex} src={image.src} alt={`Image of ${image.title}`} width={450} height={200}/>
        ))}
      </Slider>
  );
};

export default CollectionsSlider;