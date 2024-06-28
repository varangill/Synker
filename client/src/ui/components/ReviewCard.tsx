import ReviewBox from "./ReviewBox";
import { Review } from "../../models/Review";

interface ReviewCardProps {
  reviewsList: Review[];
}

const ReviewCard: React.FC<ReviewCardProps> = ({ reviewsList }) => {
  reviewsList.sort(
    (a, b) =>
      new Date(b.getCreatedTime()).getTime() -
      new Date(a.getCreatedTime()).getTime()
  );
  return (
    <div className="game-selection-container rounded-2xl flex flex-col items-center bg-gray-200 w-full">
      <div className="title text-white font-bold items-center p-2 xl:text-2xl lg:text-2xl md:text-base sm:text-xl">
        REVIEW
      </div>
      <div className="title-line w-full bg-gray-100 h-1"></div>
      <div className="max-h-[500px] overflow-y-scroll no-scrollbar rounded-b-2xl">
        <div className="pb-3"></div>
        {reviewsList.map((review, index) => (
          <div key={index}>
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
