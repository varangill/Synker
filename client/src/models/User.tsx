import background from "../ui/assets/images/background.png";

export class User {
  private id: string;
  private gameTags: string[];
  private username: string;
  private description: string;
  private profilePicture: string;
  private membership: string;
  private auth: boolean;
  private friends: string[];
  private status: boolean;
  private introvert: number;
  private observant: number;
  private thinking: number;
  private judging: number;

  constructor(
    id: string,
    gameTags: string[],
    username: string,
    description: string,
    profilePicture: string = background,
    membership: string = "default",
    auth: boolean = false,
    friends: string[] = ["Novatic", "Rensuo"],
    status: boolean = false,
    introvert: number = 5,
    observant: number = 5,
    thinking: number = 5,
    judging: number = 5
  ) {
    this.id = id || "000";
    this.gameTags = gameTags || ["Valorant", "League of Legends"];
    this.username = username || "3zPz";
    this.description = description || "User has no description.";
    this.profilePicture = profilePicture;
    this.membership = membership;
    this.auth = auth;
    this.friends = friends;
    this.status = status;
    this.introvert = introvert;
    this.observant = observant;
    this.thinking = thinking;
    this.judging = judging;
  }

  // ID
  getId(): string {
    return this.id;
  }

  setId(newId: string): void {
    this.id = newId;
  }

  // Username
  getUsername(): string {
    return this.username;
  }

  setUsername(newUsername: string): void {
    this.username = newUsername;
  }

  // Profile Picture
  getProfilePicture(): string {
    return this.profilePicture;
  }

  setProfilePicture(newPicture: string): void {
    this.profilePicture = newPicture;
  }

  // Description
  getDescription(): string {
    return this.description;
  }

  setDescription(newDescription: string): void {
    this.description = newDescription;
  }

  // Game Tags
  getGameTags(): string[] {
    return this.gameTags;
  }

  setGameTags(newGameTags: string[]): void {
    this.gameTags = newGameTags;
  }

  // Membership
  getMembership(): string {
    return this.membership;
  }

  setMembership(newMembership: string): void {
    this.membership = newMembership;
  }

  // Authentication
  isAuthenticated(): boolean {
    return this.auth;
  }

  setAuthentication(newState: boolean): void {
    this.auth = newState;
  }

  // Friends
  getFriends(): string[] {
    return this.friends;
  }

  setFriends(newFriends: string[]): void {
    this.friends = newFriends;
  }

  // Status
  getStatus(): boolean {
    return this.status;
  }

  setStatus(newStatus: boolean): void {
    this.status = newStatus;
  }

  // Introvert
  getIntrovert(): number {
    return this.introvert;
  }

  setIntrovert(newIntrovert: number): void {
    this.introvert = newIntrovert;
  }

  // Observant
  getObservant(): number {
    return this.observant;
  }

  setObservant(newObservant: number): void {
    this.observant = newObservant;
  }

  // Thinking
  getThinking(): number {
    return this.thinking;
  }

  setThinking(newThinking: number): void {
    this.thinking = newThinking;
  }

  // Judging
  getJudging(): number {
    return this.judging;
  }

  setJudging(newJudging: number): void {
    this.judging = newJudging;
  }
}
