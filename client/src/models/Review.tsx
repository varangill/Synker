import { User } from "./User"; // Ensure the User class is exported correctly from this path

export class Review {
  private _id: string;
  private _reviewer: User;
  private _recipient: User;
  private _rating: number;
  private _text: string;
  private _createdTime: Date;

  constructor(
    id: string,
    reviewer: User,
    recipient: User,
    rating: number,
    text: string,
    createdTime: Date
  ) {
    this._id = id;
    this._reviewer = reviewer;
    this._recipient = recipient;
    this._rating = rating;
    this._text = text;
    this._createdTime = createdTime;
  }

  // ID
  getId(): string {
    return this._id;
  }

  setId(newId: string): void {
    this._id = newId;
  }

  // Reviewer
  getReviewer(): User {
    return this._reviewer;
  }

  setReviewer(newReviewer: User): void {
    this._reviewer = newReviewer;
  }

  // Recipient
  getRecipient(): User {
    return this._recipient;
  }

  setRecipient(newRecipient: User): void {
    this._recipient = newRecipient;
  }

  // Rating
  getRating(): number {
    return this._rating;
  }

  setRating(newRating: number): void {
    this._rating = newRating;
  }

  // Text
  getText(): string {
    return this._text;
  }

  setText(newText: string): void {
    this._text = newText;
  }

  // Created Time
  getCreatedTime(): Date {
    return this._createdTime;
  }

  setCreatedTime(newCreatedTime: Date): void {
    this._createdTime = newCreatedTime;
  }
}
