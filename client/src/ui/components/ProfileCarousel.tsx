import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Image {
  url: string;
  caption: string;
}

interface ProfileCarouselProps {
  images: Image[];
}

const ProfileCarousel: React.FC<ProfileCarouselProps> = ({ images }) => {
  const sliderRef = React.useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Hide default arrows
  };

  return (
    <div className="rounded-2xl flex flex-col items-center bg-gray-200 w-full h-fit">
      <Slider ref={sliderRef} {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image.url} alt={image.caption} />
            <p>{image.caption}</p>
          </div>
        ))}
      </Slider>
      <button onClick={() => sliderRef.current?.slickPrev()}>Previous</button>
      <button onClick={() => sliderRef.current?.slickNext()}>Next</button>
    </div>
  );
};

export default ProfileCarousel;
