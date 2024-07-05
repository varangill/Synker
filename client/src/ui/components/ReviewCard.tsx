import React from "react";
import ReviewBox from "./ReviewBox";
import { Review } from "../../models/Review";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

interface ReviewCardProps {
  reviewsList: Review[];
}

const ReviewCard: React.FC<ReviewCardProps> = ({ reviewsList }) => {
  reviewsList.sort(
    (a, b) =>
      new Date(b.getCreatedTime()).getTime() -
      new Date(a.getCreatedTime()).getTime()
  );

  const averageRating =
    reviewsList.reduce((acc, review) => acc + review.getRating(), 0) /
    reviewsList.length;

  return (
    <div className="game-selection-container rounded-2xl flex flex-col items-center bg-gray-200 w-full">
      <div className="title text-white font-bold items-center pt-2 xl:text-2xl lg:text-2xl md:text-base sm:text-xl">
        REVIEWS
      </div>
      <div className="text-gold pb-2 flex flex-row items-center">
        <FontAwesomeIcon icon={faStar} />
        <div className="text-white font-bold pl-2 flex flex-row gap-2">
          {averageRating.toFixed(1)}
          <div className="font-normal">({reviewsList.length} reviews)</div>
        </div>
      </div>

      <div className="title-line w-full bg-gray-100 h-1"></div>
      <div className="max-h-[500px] overflow-y-scroll no-scrollbar rounded-b-2xl">
        <div className="pb-3"></div>
        {reviewsList.map((review) => (
          <div key={review.getId()}>
            <ReviewBox
              reviewer={review.getReviewer()}
              recipient={review.getRecipient()}
              rating={review.getRating()}
              text={review.getText()}
              created_time={review.getCreatedTime()}
            />
          </div>
        ))}
      </div>
      <div className="h-4"></div>
    </div>
  );
};

export default ReviewCard;
