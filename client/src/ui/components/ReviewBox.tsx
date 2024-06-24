import { User } from "../../models/User";

interface ReviewProps {
  reviewer: User;
  recipient: User;
  rating: number;
  text: String;
  created_time: Date;
}
const Review: React.FC<ReviewProps> = ({
  reviewer,
  recipient,
  rating,
  text,
  created_time,
}) => {
  const formattedDate = created_time.toLocaleString();
  return (
    <div className="w-full h-full bg-gray-200">
      <div>{reviewer.getUsername()}</div>
      <div>{recipient.getUsername()}</div>
      <div>{rating}</div>
      <div>{text}</div>
      <div>{formattedDate}</div>
    </div>
  );
};

export default Review;
