import React, { useEffect, useRef, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ICarouselBundle } from "../../types/Carousel";
import CancelSaveButton from "./CancelSaveButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrash,
  faPlus,
  faPencilAlt,
} from "@fortawesome/free-solid-svg-icons";

interface ProfileCarouselProps {
  images: ICarouselBundle[];
  auth: boolean;
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

const ProfileCarousel: React.FC<ProfileCarouselProps> = ({ images, auth }) => {
  const [allCarouselItems, setAllCarouselItems] =
    useState<ICarouselBundle[]>(images);
  const [tempCarouselItems, setTempCarouselItems] =
    useState<ICarouselBundle[]>(images);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [currentImage, setCurrentImage] = useState<string>("");
  const [currentCaption, setCurrentCaption] = useState<string>("");
  const [newCaption, setNewCaption] = useState<string>("");
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const carouselInput = useRef<HTMLInputElement>(null);
  const newImageInput = useRef<HTMLInputElement>(null);

  const handleImageClick = (index: number) => {
    if (isEditing) {
      setCurrentIndex(index);
      setCurrentImage(tempCarouselItems[index].image);
      setCurrentCaption(tempCarouselItems[index].caption);
      carouselInput.current?.click();
    }
  };

  const handleNewImageClick = () => {
    if (isEditing) {
      newImageInput.current?.click();
    }
  };

  const handleEditIconClick = (index: number) => {
    if (isEditing) {
      setCurrentIndex(index);
      setCurrentImage(tempCarouselItems[index].image);
      setCurrentCaption(tempCarouselItems[index].caption);
    }
  };

  const handleEditClick = () => {
    setIsEditing(!isEditing);
    if (!isEditing) {
      setTempCarouselItems(allCarouselItems);
    }
  };

  const handleSaveClick = () => {
    let updatedItems = [...tempCarouselItems];
    if (currentIndex !== null) {
      updatedItems = updatedItems.map((item, index) => {
        if (index === currentIndex) {
          return { ...item, image: currentImage, caption: currentCaption };
        }
        return item;
      });
    }

    setAllCarouselItems(updatedItems);
    setTempCarouselItems(updatedItems);
    setIsEditing(false);
    setCurrentIndex(null);
    setCurrentImage("");
    setCurrentCaption("");
    setNewCaption("");
  };

  const handleDeleteClick = (index: number) => {
    const updatedItems = tempCarouselItems.filter((_, i) => i !== index);
    setTempCarouselItems(updatedItems);
    if (currentIndex !== null && index === currentIndex) {
      setCurrentIndex(null);
      setCurrentImage("");
      setCurrentCaption("");
    }
  };

  const handleImageChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    isNew: boolean = false
  ) => {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files[0]) {
      const file = input.files[0];

      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          if (isNew) {
            setTempCarouselItems([
              ...tempCarouselItems,
              { image: reader.result, caption: newCaption },
            ]);
            setNewCaption("");
          } else {
            setCurrentImage(reader.result);
            if (currentIndex !== null) {
              const updatedItems = tempCarouselItems.map((item, index) => {
                if (index === currentIndex) {
                  return { ...item, image: reader.result as string };
                }
                return item;
              });
              setTempCarouselItems(updatedItems);
            }
          }
        }
      };
      reader.readAsDataURL(file);
    } else {
      console.log("No file chosen or file access error.");
    }
  };

  useEffect(() => {
    if (!isEditing) {
      setTempCarouselItems(allCarouselItems);
      setCurrentIndex(null);
      setCurrentImage("");
      setCurrentCaption("");
    }
  }, [allCarouselItems, isEditing]);

  return (
    <div className="rounded-2xl flex flex-col items-center bg-gray-200 text-white w-full">
      <div className="title flex text-white font-bold items-center p-2 xl:text-2xl lg:text-2xl md:text-base sm:text-xl">
        PROFILE
      </div>
      <div className="title-line w-full bg-gray-100 h-1"></div>
      <div className={`w-full h-fit p-5 ${auth ? "h-fit" : ""}`}>
        <Carousel
          responsive={responsive}
          ssr={false}
          infinite
          autoPlay={!isEditing}
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
          {(isEditing ? tempCarouselItems : allCarouselItems).map(
            (carouselBundle, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center h-fit relative"
              >
                <img
                  src={carouselBundle.image}
                  onClick={() => handleImageClick(index)}
                  className={`object-contain h-96 max-w-full rounded-xl${
                    auth && isEditing ? "hover:opacity-30 cursor-pointer" : ""
                  }`}
                />
                <input
                  className="PFP-input hidden"
                  type="file"
                  accept="image/*"
                  ref={carouselInput}
                  onChange={handleImageChange}
                />
                {isEditing && currentIndex === index ? (
                  <textarea
                    className="desc text-white text-base pl-3 pr-5 pt-2 w-[300px] bg-gray-200 w-1/2 overflow-hidden italic text-ellipsis break-words mt-5 border-2 border-gray-100 rounded-xl"
                    value={currentCaption}
                    maxLength={150}
                    autoCorrect="on"
                    onChange={(e) => setCurrentCaption(e.target.value)}
                  />
                ) : (
                  <div className="mt-2 text-center italic">
                    {carouselBundle.caption}
                  </div>
                )}
                {auth && isEditing && (
                  <div>
                    <button
                      className="absolute top-0 right-2"
                      onClick={() => handleNewImageClick()}
                    >
                      <FontAwesomeIcon icon={faPlus} />
                    </button>
                    <button
                      className="absolute top-10 right-2"
                      onClick={() => handleEditIconClick(index)}
                    >
                      <FontAwesomeIcon icon={faPencilAlt} />
                    </button>
                    <button
                      className="absolute top-20 right-2"
                      onClick={() => handleDeleteClick(index)}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                    <input
                      className="PFP-input hidden"
                      type="file"
                      accept="image/*"
                      ref={newImageInput}
                      onChange={(e) => handleImageChange(e, true)}
                    />
                  </div>
                )}
              </div>
            )
          )}
        </Carousel>
        <div className="btn-container w-full justify-end flex">
          {auth && !isEditing && (
            <button className="btn-edit" onClick={handleEditClick}>
              <FontAwesomeIcon icon={faEdit} className="text-white" />
            </button>
          )}
          {auth && isEditing && (
            <CancelSaveButton
              onCancelClick={handleEditClick}
              onSaveClick={handleSaveClick}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileCarousel;
