// testLobbies.ts
import { Lobby } from "../models/Lobby";
import { User } from "../models/User";
import { Game } from "../models/Game";

// Create mock users
const user1 = new User("1", ["Valorant"], "player1", "Description 1");
const user2 = new User("2", ["League of Legends"], "player2", "Description 2");
const user3 = new User("3", ["CS:GO"], "player3", "Description 3");
const user4 = new User("4", ["Dota 2"], "player4", "Description 4");
const user5 = new User("5", ["Overwatch"], "player5", "Description 5");

// Create mock games
const game1 = new Game("1", "Game One", "Shooter", "Red", "path/to/game1.png");
const game2 = new Game("2", "Game Two", "MOBA", "Blue", "path/to/game2.png");

// Create mock lobbies
const lobby1 = new Lobby(
  "1",
  user1,
  [user1, user2, user3],
  new Date(),
  new Date(),
  "Competitive Match",
  "Looking for skilled players",
  5,
  game1,
  ["Tag1", "Tag2"]
);

const lobby2 = new Lobby(
  "2",
  user2,
  [user2, user3],
  new Date(),
  new Date(),
  "Casual Play",
  "Just for fun",
  5,
  game2,
  ["Fun", "Chill"]
);

const lobby3 = new Lobby(
  "3",
  user3,
  [user3, user4, user5],
  new Date(),
  new Date(),
  "Ranked Grind",
  "Climbing the ladder",
  5,
  game1,
  ["Ranked", "Serious"]
);

// Create a test list of lobbies
const testLobbies: Lobby[] = [lobby1, lobby2, lobby3];

export default testLobbies;
