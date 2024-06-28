import { User } from "../../models/User";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

interface ReviewProps {
  reviewer: User;
  recipient: User;
  rating: number;
  text: string;
  created_time: Date;
}
const Review: React.FC<ReviewProps> = ({
  reviewer,
  rating,
  text,
  created_time,
}) => {
  const currentDate = new Date();
  const timeDifference = currentDate.getTime() - created_time.getTime();
  const formattedDate = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  return (
    <div className="w-full h-full bg-gray-200 text-white pb-3 pl-5 pr-5">
      <div className="flex flex-row items-center pb-5">
        <img
          className="rounded-full h-16"
          src={reviewer.getProfilePicture()}
        ></img>
        <div className="ml-4">
          <div className="font-bold">{reviewer.getUsername()}</div>
          <div className="text-sm italic">{formattedDate} days ago</div>
        </div>
      </div>
      <div className="flex flex-row items-center">
        {[...Array(rating)].map(() => (
          <FontAwesomeIcon icon={faStar} className="text-gold" />
        ))}
        <div className="ml-2">({rating.toFixed(1)})</div>
      </div>

      <div className="pb-3 mt-1">{text}</div>
      <div className="title-line w-full bg-gray-100 h-0.5"></div>
    </div>
  );
};

export default Review;
