import background from "../ui/assets/images/background.png";
import { User } from "../models/User";

const testUser = new User(
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
export default testUser;
