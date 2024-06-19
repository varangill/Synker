import background from "../ui/assets/images/background.png";

export class User {
  private _id: string;
  private _gameTags: string[];
  private _username: string;
  private _description: string;
  private _profilePicture: string;
  private _membership: string;
  private _auth: boolean;
  private _friends: string[];
  private _status: boolean;
  private _introvert: number;
  private _observant: number;
  private _thinking: number;
  private _judging: number;

  constructor(
    id: string,
    gameTags: string[],
    username: string,
    description: string,
    profilePicture: string = background,
    membership: string = "None",
    auth: boolean = false,
    friends: string[] = [],
    status: boolean = false,
    introvert: number = 5,
    observant: number = 5,
    thinking: number = 5,
    judging: number = 5
  ) {
    this._id = id || "000";
    this._gameTags = gameTags || [];
    this._username = username;
    this._description = description || "User has no description.";
    this._profilePicture = profilePicture;
    this._membership = membership;
    this._auth = auth;
    this._friends = friends;
    this._status = status;
    this._introvert = introvert;
    this._observant = observant;
    this._thinking = thinking;
    this._judging = judging;
  }

  // ID
  getId(): string {
    return this._id;
  }

  setId(newId: string): void {
    this._id = newId;
  }

  // Username
  getUsername(): string {
    return this._username;
  }

  setUsername(newUsername: string): void {
    this._username = newUsername;
  }

  // Profile Picture
  getProfilePicture(): string {
    return this._profilePicture;
  }

  setProfilePicture(newPicture: string): void {
    this._profilePicture = newPicture;
  }

  // Description
  getDescription(): string {
    return this._description;
  }

  setDescription(newDescription: string): void {
    this._description = newDescription;
  }

  // Game Tags
  getGameTags(): string[] {
    return this._gameTags;
  }

  setGameTags(newGameTags: string[]): void {
    this._gameTags = newGameTags;
  }

  // Membership
  getMembership(): string {
    return this._membership;
  }

  setMembership(newMembership: string): void {
    this._membership = newMembership;
  }

  // Authentication
  isAuthenticated(): boolean {
    return this._auth;
  }

  setAuthentication(newState: boolean): void {
    this._auth = newState;
  }

  // Friends
  getFriends(): string[] {
    return this._friends;
  }

  setFriends(newFriends: string[]): void {
    this._friends = newFriends;
  }

  // Status
  getStatus(): boolean {
    return this._status;
  }

  setStatus(newStatus: boolean): void {
    this._status = newStatus;
  }

  // Introvert
  getIntrovert(): number {
    return this._introvert;
  }

  setIntrovert(newIntrovert: number): void {
    this._introvert = newIntrovert;
  }

  // Observant
  getObservant(): number {
    return this._observant;
  }

  setObservant(newObservant: number): void {
    this._observant = newObservant;
  }

  // Thinking
  getThinking(): number {
    return this._thinking;
  }

  setThinking(newThinking: number): void {
    this._thinking = newThinking;
  }

  // Judging
  getJudging(): number {
    return this._judging;
  }

  setJudging(newJudging: number): void {
    this._judging = newJudging;
  }
}
