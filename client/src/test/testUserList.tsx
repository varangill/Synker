import background from "../ui/assets/images/background.png";
import { User } from "../models/User";
import { CarouselBundle } from "../models/Carousel";

const user1CarouselImages: CarouselBundle[] = [
  { image: "../ui/assets/images/background.png", caption: "User 1 - Image 1" },
  { image: "../ui/assets/images/logo.png", caption: "User 1 - Image 2" },
];

const user2CarouselImages: CarouselBundle[] = [
  {
    image: "../ui/assets/images/nav-bar-background.png",
    caption: "User 2 - Image 1",
  },
  {
    image: "../ui/assets/images/sync-background.png",
    caption: "User 2 - Image 2",
  },
];

const user3CarouselImages: CarouselBundle[] = [
  { image: "../ui/assets/images/background.png", caption: "User 3 - Image 1" },
  { image: "../ui/assets/images/logo.png", caption: "User 3 - Image 2" },
];

const user4CarouselImages: CarouselBundle[] = [
  {
    image: "../ui/assets/images/nav-bar-background.png",
    caption: "User 4 - Image 1",
  },
  {
    image: "../ui/assets/images/sync-background.png",
    caption: "User 4 - Image 2",
  },
];

const user5CarouselImages: CarouselBundle[] = [
  { image: "../ui/assets/images/background.png", caption: "User 5 - Image 1" },
  { image: "../ui/assets/images/logo.png", caption: "User 5 - Image 2" },
];

const user6CarouselImages: CarouselBundle[] = [
  {
    image: "../ui/assets/images/nav-bar-background.png",
    caption: "User 6 - Image 1",
  },
  {
    image: "../ui/assets/images/sync-background.png",
    caption: "User 6 - Image 2",
  },
];

const testUser1 = new User(
  "1",
  ["Valorant", "League of Legends", "Apex", "Lethal Company"],
  "Rensuo",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non dapibus lacus.",
  background,
  "Platinum",
  true,
  [],
  true,
  1,
  7,
  3,
  2,
  user1CarouselImages
);

const testUser2 = new User(
  "2",
  ["Fortnite", "Minecraft", "Overwatch", "Call of Duty"],
  "GamerGirl",
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
  user2CarouselImages
);

const testUser3 = new User(
  "3",
  ["Dota 2", "CS:GO", "PUBG", "Rocket League"],
  "ProPlayer",
  "Suspendisse potenti. Phasellus euismod elit at libero tincidunt, nec sollicitudin libero facilisis.",
  background,
  "Silver",
  true,
  [],
  false,
  3,
  4,
  5,
  6,
  user3CarouselImages
);

const testUser4 = new User(
  "4",
  ["World of Warcraft", "Final Fantasy XIV", "Destiny 2", "EVE Online"],
  "MMOExpert",
  "Curabitur sit amet mauris. Morbi in dui quis est pulvinar ullamcorper.",
  background,
  "Diamond",
  true,
  [],
  true,
  4,
  3,
  2,
  1,
  user4CarouselImages
);

const testUser5 = new User(
  "5",
  ["Among Us", "Phasmophobia", "Dead by Daylight", "Fall Guys"],
  "CasualGamer",
  "Fusce nec tellus sed augue semper porta. Mauris massa.",
  background,
  "Bronze",
  false,
  [],
  true,
  5,
  6,
  7,
  8,
  user5CarouselImages
);

const testUser6 = new User(
  "6",
  ["Minecraft", "Valorant", "Roblox", "Lethal Company"],
  "Kelly",
  "Phasellus vitae pulvinar ex, vel efficitur lacus. Sed maximus, justo quis lobortis suscipit, risus nisi molestie erat, nec dapibus dui sem in elit. Donec non neque ullamcorper, blandit magna at, tristique erat. Vivamus ac aliquet justo. Quisque non nulla nisl. Praesent pharetra efficitur nisi id consectetur.",
  background,
  "Platinum",
  false,
  [],
  true,
  1,
  2,
  8,
  3,
  user6CarouselImages
);

const testUserList = [
  testUser1,
  testUser2,
  testUser3,
  testUser4,
  testUser5,
  testUser6,
];

export default testUserList;
