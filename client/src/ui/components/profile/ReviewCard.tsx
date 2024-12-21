import React from "react";
import ReviewBox from "./ReviewBox";
import SectionCard from "../common/SectionCard";

import { Review } from "../../../types/Review";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

interface ReviewCardProps {
  reviewsList: Review[];
}

const ReviewCard: React.FC<ReviewCardProps> = ({ reviewsList }) => {
  reviewsList.sort(
    (a, b) =>
      new Date(b.createdTime).getTime() - new Date(a.createdTime).getTime()
  );

  const averageRating =
    reviewsList.reduce((acc, review) => acc + review.rating, 0) /
    reviewsList.length;

  const averageReview = (
    <div className="text-gold pb-2 flex flex-row items-center">
      <FontAwesomeIcon icon={faStar} />
      <div className="text-white font-bold pl-2 flex flex-row gap-2">
        {averageRating.toFixed(1)}
        <div className="font-normal">({reviewsList.length} reviews)</div>
      </div>
    </div>
  );

  return (
    <SectionCard title="REVIEWS" titleContent={averageReview}>
      <div className="max-h-[500px] overflow-y-scroll no-scrollbar rounded-b-2xl">
        <div className="pb-3"></div>
        {reviewsList.map((review) => (
          <div key={review.id}>
            <ReviewBox
              reviewer={review.reviewer}
              recipient={review.recipient}
              rating={review.rating}
              text={review.text}
              created_time={review.createdTime}
            />
          </div>
        ))}
      </div>
      <div className="h-4"></div>
    </SectionCard>
  );
};

export default ReviewCard;
