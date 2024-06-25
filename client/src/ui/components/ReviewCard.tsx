import ReviewBox from "./ReviewBox";
import { Review } from "../../models/Review";

interface ReviewCardProps {
  reviewsList: Review[];
}

const ReviewCard: React.FC<ReviewCardProps> = ({ reviewsList }) => {
  return (
    <div className="rounded-2xl flex flex-col items-center bg-gray-200 w-full h-full max-h-96">
      <div className="title text-xl text-white font-bold">REVIEW</div>
      <div className="h-72 w-72 overflow-y-scroll no-scrollbar">
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
    </div>
  );
};

export default ReviewCard;
