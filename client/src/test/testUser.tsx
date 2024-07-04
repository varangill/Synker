import background from "../ui/assets/images/background.png";
import { User } from "../models/User";
import { CarouselBundle } from "../models/Carousel";

const userCarouselImages: CarouselBundle[] = [
  { image: "../ui/assets/images/background.png", caption: "User Image 1" },
  { image: "../ui/assets/images/logo.png", caption: "User Image 2" },
];

const friend = new User(
  "3",
  ["Genshin Impact"],
  "Rensuo",
  "Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.",
  background,
  "Gold",
  false,
  [],
  true,
  2,
  5,
  4,
  3,
  userCarouselImages
);

const testUser = new User(
  "2",
  ["Fortnite", "Minecraft", "Overwatch", "Call of Duty"],
  "3zPz",
  "Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.",
  background,
  "Gold",
  false,
  [friend],
  true,
  2,
  5,
  4,
  3,
  userCarouselImages
);

export default testUser;
