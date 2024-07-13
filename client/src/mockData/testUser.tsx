// mockData.ts
import background from "../ui/assets/images/background.png";
import img1 from "../ui/assets/images/nav-bar-background.png";
import { IUser } from "../types/User";
import { ICarouselBundle } from "../types/Carousel";

const userCarouselImages: ICarouselBundle[] = [
  { image: img1, caption: "The time when I got 7 fortune in TFT!" },
  { image: background, caption: "User Image 2" },
];

const friend: IUser = {
  id: "3",
  gameTags: ["Genshin Impact"],
  username: "Rensuo",
  description:
    "Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.",
  profilePicture: background,
  membership: "Gold",
  auth: false,
  friends: [],
  status: true,
  introvert: 2,
  observant: 5,
  thinking: 4,
  judging: 3,
  carousel: { images: userCarouselImages },
};

const testUser: IUser = {
  id: "2",
  gameTags: ["Fortnite", "Minecraft", "Overwatch", "Call of Duty"],
  username: "3zPz",
  description:
    "Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.",
  profilePicture: background,
  membership: "Platinum",
  auth: false,
  friends: [friend],
  status: true,
  introvert: 2,
  observant: 5,
  thinking: 4,
  judging: 3,
  carousel: { images: userCarouselImages },
};

export default testUser;
