import ReviewBox from "./ReviewBox";
import { Review } from "../../models/Review";

interface ReviewCardProps {
  reviewsList: Review[];
}

const ReviewCard: React.FC<ReviewCardProps> = ({ reviewsList }) => {
  return (
    <div className="w-full h-full bg-gray-200 flex flex-col">
      <div className="title">Review</div>
      <div>
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
