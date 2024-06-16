import background from "../ui/assets/images/background.png";
import { User } from "../models/User";

const testUser1 = new User(
  "1",
  ["Valorant", "League of Legends", "Apex", "Lethal Company"],
  "Rensuo",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non dapibus lacus.",
  background,
  "Platinum",
  true,
  ["3zPz", "Novatic"],
  true,
  1,
  7,
  3,
  2
);

const testUser2 = new User(
  "2",
  ["Fortnite", "Minecraft", "Overwatch", "Call of Duty"],
  "GamerGirl",
  "Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.",
  background,
  "Gold",
  false,
  ["Clan1", "Clan2"],
  true,
  2,
  5,
  4,
  3
);

const testUser3 = new User(
  "3",
  ["Dota 2", "CS:GO", "PUBG", "Rocket League"],
  "ProPlayer",
  "Suspendisse potenti. Phasellus euismod elit at libero tincidunt, nec sollicitudin libero facilisis.",
  background,
  "Silver",
  true,
  ["TeamA", "TeamB"],
  false,
  3,
  4,
  5,
  6
);

const testUser4 = new User(
  "4",
  ["World of Warcraft", "Final Fantasy XIV", "Destiny 2", "EVE Online"],
  "MMOExpert",
  "Curabitur sit amet mauris. Morbi in dui quis est pulvinar ullamcorper.",
  background,
  "Diamond",
  true,
  ["GuildX", "GuildY"],
  true,
  4,
  3,
  2,
  1
);

const testUser5 = new User(
  "5",
  ["Among Us", "Phasmophobia", "Dead by Daylight", "Fall Guys"],
  "CasualGamer",
  "Fusce nec tellus sed augue semper porta. Mauris massa.",
  background,
  "Bronze",
  false,
  ["Group1", "Group2"],
  true,
  5,
  6,
  7,
  8
);

const testUserList = [testUser1, testUser2, testUser3, testUser4, testUser5];
export default testUserList;
