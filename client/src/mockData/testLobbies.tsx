// testLobbies.ts
import { ILobby } from "../types/Lobby";
import { IUser } from "../types/User";
import { IGame } from "../types/Game";
import { ICarouselBundle } from "../types/Carousel";
import background from "../ui/assets/images/background.png";

// Create mock carousel images with background as the image path
const carouselImages: ICarouselBundle[] = [
  { image: background, caption: "Image 1" },
  { image: background, caption: "Image 2" },
];

// Create mock users
const user1: IUser = {
  id: "1",
  gameTags: ["Valorant"],
  username: "player1",
  description: "Description 1",
  profilePicture: background,
  membership: "None",
  auth: false,
  friends: [],
  status: false,
  introvert: 5,
  observant: 5,
  thinking: 5,
  judging: 5,
  carousel: { images: carouselImages },
};

const user2: IUser = {
  id: "2",
  gameTags: ["League of Legends"],
  username: "player2",
  description: "Description 2",
  profilePicture: background,
  membership: "None",
  auth: false,
  friends: [],
  status: false,
  introvert: 5,
  observant: 5,
  thinking: 5,
  judging: 5,
  carousel: { images: carouselImages },
};

const user3: IUser = {
  id: "3",
  gameTags: ["CS:GO"],
  username: "player3",
  description: "Description 3",
  profilePicture: background,
  membership: "None",
  auth: false,
  friends: [],
  status: false,
  introvert: 5,
  observant: 5,
  thinking: 5,
  judging: 5,
  carousel: { images: carouselImages },
};

const user4: IUser = {
  id: "4",
  gameTags: ["Dota 2"],
  username: "player4",
  description: "Description 4",
  profilePicture: background,
  membership: "None",
  auth: false,
  friends: [],
  status: false,
  introvert: 5,
  observant: 5,
  thinking: 5,
  judging: 5,
  carousel: { images: carouselImages },
};

const user5: IUser = {
  id: "5",
  gameTags: ["Overwatch"],
  username: "player5",
  description: "Description 5",
  profilePicture: background,
  membership: "None",
  auth: false,
  friends: [],
  status: false,
  introvert: 5,
  observant: 5,
  thinking: 5,
  judging: 5,
  carousel: { images: carouselImages },
};

// Create mock games
const game1: IGame = {
  id: "1",
  name: "Game One",
  genre: "Shooter",
  color: "Red",
  picture: "path/to/game1.png",
};

const game2: IGame = {
  id: "2",
  name: "Game Two",
  genre: "MOBA",
  color: "Blue",
  picture: "path/to/game2.png",
};

// Create mock lobbies
const lobby1: ILobby = {
  id: "1",
  owner: user1,
  players: [user1, user2, user3],
  createdDate: new Date(),
  startDate: new Date(),
  title: "Competitive Match",
  description: "Looking for skilled players",
  maxPlayers: 5,
  game: game1,
  lobbyTags: ["Tag1", "Tag2"],
};

const lobby2: ILobby = {
  id: "2",
  owner: user2,
  players: [user2, user3],
  createdDate: new Date(),
  startDate: new Date(),
  title: "Casual Play",
  description: "Just for fun",
  maxPlayers: 5,
  game: game2,
  lobbyTags: ["Fun", "Chill"],
};

const lobby3: ILobby = {
  id: "3",
  owner: user3,
  players: [user3, user4, user5],
  createdDate: new Date(),
  startDate: new Date(),
  title: "Ranked Grind",
  description: "Climbing the ladder",
  maxPlayers: 5,
  game: game1,
  lobbyTags: ["Ranked", "Serious"],
};

// Create a test list of lobbies
const testLobbies: ILobby[] = [lobby1, lobby2, lobby3];

export default testLobbies;
