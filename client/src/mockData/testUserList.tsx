// mockData.ts
import background from "../ui/assets/images/background.png";
import img1 from "../ui/assets/images/nav-bar-background.png";
import logo from "../ui/assets/images/logo.png";
import syncBackground from "../ui/assets/images/sync-background.png";
import { IUser } from "../types/User";
import { ICarouselBundle } from "../types/Carousel";

// Create mock carousel images
const user1CarouselImages: ICarouselBundle[] = [
  { image: background, caption: "User 1 - Image 1" },
  { image: logo, caption: "User 1 - Image 2" },
];

const user2CarouselImages: ICarouselBundle[] = [
  { image: img1, caption: "User 2 - Image 1" },
  { image: syncBackground, caption: "User 2 - Image 2" },
];

const user3CarouselImages: ICarouselBundle[] = [
  { image: background, caption: "User 3 - Image 1" },
  { image: logo, caption: "User 3 - Image 2" },
];

const user4CarouselImages: ICarouselBundle[] = [
  { image: img1, caption: "User 4 - Image 1" },
  { image: syncBackground, caption: "User 4 - Image 2" },
];

const user5CarouselImages: ICarouselBundle[] = [
  { image: background, caption: "User 5 - Image 1" },
  { image: logo, caption: "User 5 - Image 2" },
];

const user6CarouselImages: ICarouselBundle[] = [
  { image: img1, caption: "User 6 - Image 1" },
  { image: syncBackground, caption: "User 6 - Image 2" },
];

// Create mock users
const testUser1: IUser = {
  id: "1",
  gameTags: ["Valorant", "League of Legends", "Apex", "Lethal Company"],
  username: "Rensuo",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non dapibus lacus.",
  profilePicture: background,
  membership: "Platinum",
  auth: true,
  friends: [],
  status: true,
  introvert: 1,
  observant: 7,
  thinking: 3,
  judging: 2,
  carousel: { images: user1CarouselImages },
};

const testUser2: IUser = {
  id: "2",
  gameTags: ["Fortnite", "Minecraft", "Overwatch", "Call of Duty"],
  username: "GamerGirl",
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
  carousel: { images: user2CarouselImages },
};

const testUser3: IUser = {
  id: "3",
  gameTags: ["Dota 2", "CS:GO", "PUBG", "Rocket League"],
  username: "ProPlayer",
  description:
    "Suspendisse potenti. Phasellus euismod elit at libero tincidunt, nec sollicitudin libero facilisis.",
  profilePicture: background,
  membership: "Silver",
  auth: true,
  friends: [],
  status: false,
  introvert: 3,
  observant: 4,
  thinking: 5,
  judging: 6,
  carousel: { images: user3CarouselImages },
};

const testUser4: IUser = {
  id: "4",
  gameTags: [
    "World of Warcraft",
    "Final Fantasy XIV",
    "Destiny 2",
    "EVE Online",
  ],
  username: "MMOExpert",
  description:
    "Curabitur sit amet mauris. Morbi in dui quis est pulvinar ullamcorper.",
  profilePicture: background,
  membership: "Diamond",
  auth: true,
  friends: [],
  status: true,
  introvert: 4,
  observant: 3,
  thinking: 2,
  judging: 1,
  carousel: { images: user4CarouselImages },
};

const testUser5: IUser = {
  id: "5",
  gameTags: ["Among Us", "Phasmophobia", "Dead by Daylight", "Fall Guys"],
  username: "CasualGamer",
  description: "Fusce nec tellus sed augue semper porta. Mauris massa.",
  profilePicture: background,
  membership: "Bronze",
  auth: false,
  friends: [],
  status: true,
  introvert: 5,
  observant: 6,
  thinking: 7,
  judging: 8,
  carousel: { images: user5CarouselImages },
};

const testUser6: IUser = {
  id: "6",
  gameTags: ["Minecraft", "Valorant", "Roblox", "Lethal Company"],
  username: "Kelly",
  description:
    "Phasellus vitae pulvinar ex, vel efficitur lacus. Sed maximus, justo quis lobortis suscipit, risus nisi molestie erat, nec dapibus dui sem in elit. Donec non neque ullamcorper, blandit magna at, tristique erat. Vivamus ac aliquet justo. Quisque non nulla nisl. Praesent pharetra efficitur nisi id consectetur.",
  profilePicture: background,
  membership: "Platinum",
  auth: false,
  friends: [],
  status: true,
  introvert: 1,
  observant: 2,
  thinking: 8,
  judging: 3,
  carousel: { images: user6CarouselImages },
};

const testUserList: IUser[] = [
  testUser1,
  testUser2,
  testUser3,
  testUser4,
  testUser5,
  testUser6,
];

export default testUserList;
