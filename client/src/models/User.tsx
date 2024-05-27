import background from "../ui/assets/images/background.png";

export class User {
  id: string;
  gameTags: string[];
  username: string;
  description: string;
  profilePicture: string;
  membership: string;
  auth: boolean;
  friends: string[];
  status: boolean;

  constructor(
    id: string,
    gameTags: string[],
    username: string,
    description: string,
    profilePicture: string,
    membership: string,
    auth: boolean,
    friends: string[], // String of user id
    status: boolean
  ) {
    this.id = id || "000";
    this.gameTags = gameTags || ["Valorant", "League of Legends"];
    this.username = username || "3zPz";
    this.description = description || "User has no description.";
    this.profilePicture = profilePicture || background;
    this.membership = membership || "default";
    this.auth = auth === undefined ? false : auth;
    this.friends = friends || ["Novatic", "Rensuo"];
    this.status = status || false;
  }

  getUsername(): string {
    return this.username;
  }

  setUsername(newUsername: string): void {
    this.username = newUsername;
  }

  getProfilePicture(): string {
    return this.profilePicture;
  }

  setProfilePicture(newPicture: string): void {
    this.profilePicture = newPicture;
  }

  getDescription(): string {
    return this.description;
  }

  setDescription(newDescription: string): void {
    this.description = newDescription;
  }

  getGameTags(): string[] {
    return this.gameTags;
  }

  setGameTags(newGameTags: string[]): void {
    this.gameTags = newGameTags;
  }

  getFriends(): string[] {
    return this.friends;
  }

  setFriends(newFriends: string[]): void {
    this.friends = newFriends;
  }

  getMembership(): string {
    return this.membership;
  }

  setMembership(newMembership: string): void {
    this.membership = newMembership;
  }

  getStatus(): boolean {
    return this.status;
  }

  setStatus(newStatus: boolean): void {
    this.status = newStatus;
  }

  // Add more methods to manipulate user profiles as needed
}
