// mockData.ts
import { Review } from "../models/Review";
import { User } from "../models/User";
import background from "../ui/assets/images/background.png";

const reviewer1 = new User(
  "1",
  ["tag1", "tag2"],
  "John Doe",
  "An avid gamer and reviewer.",
  background,
  "Premium",
  true,
  ["2"],
  true,
  3,
  4,
  5,
  2
);

const recipient1 = new User(
  "2",
  ["tag3", "tag4"],
  "Jane Smith",
  "A casual gamer and friendly individual.",
  background,
  "Basic",
  true,
  ["1"],
  false,
  2,
  3,
  4,
  5
);

const reviews = [
  new Review(
    "1",
    reviewer1,
    recipient1,
    5,
    "Great service!",
    new Date("2024-06-24T10:30:00Z")
  ),
  new Review(
    "2",
    reviewer1,
    recipient1,
    4,
    "Good experience",
    new Date("2024-06-23T14:15:00Z")
  ),
  new Review(
    "3",
    reviewer1,
    recipient1,
    3,
    "Average performance",
    new Date("2024-06-22T09:00:00Z")
  ),
];

export default reviews;
