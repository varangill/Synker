import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CarouselBundle } from "../../models/Carousel";

interface ProfileCarouselProps {
  images: CarouselBundle[];
}

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const ProfileCarousel: React.FC<ProfileCarouselProps> = ({ images }) => {
  return (
    <div className="rounded-2xl flex flex-col items-center bg-gray-200 text-white w-full">
      <div className="title flex text-white font-bold items-center p-2 xl:text-2xl lg:text-2xl md:text-base sm:text-xl">
        PROFILE
      </div>
      <div className="title-line w-full bg-gray-100 h-1"></div>
      <div className="w-full h-[450px] p-4">
        <Carousel
          responsive={responsive}
          ssr={false} // means to render carousel on server-side.
          infinite
          autoPlay
          autoPlaySpeed={6000}
          keyBoardControl
          customTransition="transform 300ms ease-in-out"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          deviceType="desktop"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {images.map((carouselBundle, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center w-full h-fit"
            >
              <img
                src={carouselBundle.image}
                className="object-contain h-96 max-w-full"
              />

              <div className="mt-2 text-center italic">
                {carouselBundle.caption}
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ProfileCarousel;
