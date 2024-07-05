import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CarouselBundle } from "../../models/Carousel";

interface ProfileCarouselProps {
  images: CarouselBundle[];
}

const ProfileCarousel: React.FC<ProfileCarouselProps> = ({ images }) => {
  const sliderRef = React.useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="rounded-2xl flex flex-col items-center bg-gray-200 text-white w-full">
      <div className="title flex text-white font-bold items-center p-2 xl:text-2xl lg:text-2xl md:text-base sm:text-xl">
        PROFILE
      </div>
      <div className="title-line w-full bg-gray-100 h-1"></div>
      <div className="w-full h-[450px] p-4">
        <Slider ref={sliderRef} {...settings} className="w-full h-full">
          {images.map((carouselBundle, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center w-full h-full"
            >
              <img
                src={carouselBundle.image}
                className="object-contain w-full h-full"
                alt={carouselBundle.caption}
              />
              <div className="mt-2 text-center">{carouselBundle.caption}</div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="flex space-x-4 mt-4">
        <button
          onClick={() => sliderRef.current?.slickPrev()}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Previous
        </button>
        <button
          onClick={() => sliderRef.current?.slickNext()}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProfileCarousel;
