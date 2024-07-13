// mockData.ts
import { IReview } from "../types/Review";
import { IUser } from "../types/User";
import { ICarouselBundle } from "../types/Carousel";
import background from "../ui/assets/images/background.png";

// Create mock carousel images
const carouselImages: ICarouselBundle[] = [
  { image: background, caption: "Image 1" },
  { image: background, caption: "Image 2" },
];

// Create mock users
const reviewer1: IUser = {
  id: "1",
  gameTags: ["tag1", "tag2"],
  username: "John Doe",
  description: "An avid gamer and reviewer.",
  profilePicture: background,
  membership: "Premium",
  auth: true,
  friends: [],
  status: true,
  introvert: 3,
  observant: 4,
  thinking: 5,
  judging: 2,
  carousel: { images: carouselImages },
};

const recipient1: IUser = {
  id: "2",
  gameTags: ["tag3", "tag4"],
  username: "Jane Smith",
  description: "A casual gamer and friendly individual.",
  profilePicture: background,
  membership: "Basic",
  auth: true,
  friends: [],
  status: false,
  introvert: 2,
  observant: 3,
  thinking: 4,
  judging: 5,
  carousel: { images: carouselImages },
};

// Create mock reviews
const reviews: IReview[] = [
  {
    id: "1",
    reviewer: reviewer1,
    recipient: recipient1,
    rating: 5,
    text: "Great service! I loved playing with him, we had a lot of fun!",
    createdTime: new Date("2024-06-24T10:30:00Z"),
  },
  {
    id: "2",
    reviewer: reviewer1,
    recipient: recipient1,
    rating: 4,
    text: "Good experience, we did lose our competitive games but he was very friendly the whole time.",
    createdTime: new Date("2024-06-23T14:15:00Z"),
  },
  {
    id: "3",
    reviewer: reviewer1,
    recipient: recipient1,
    rating: 2,
    text: "Average performance, I was kind of bored though.",
    createdTime: new Date("2024-06-22T09:00:00Z"),
  },
];

export default reviews;
