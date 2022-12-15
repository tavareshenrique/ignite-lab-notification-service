import { randomUUID } from 'crypto';
import { Replace } from 'src/helpers/Replace';

import { Content } from './content';

export interface INotificationParams {
  recipientId: string;
  content: Content;
  category: string;
  readAt?: Date | null;
  createdAt: Date;
}

export class Notification {
  private _id: string;
  private params: INotificationParams;

  constructor(params: Replace<INotificationParams, { createdAt?: Date }>) {
    this._id = randomUUID();
    this.params = {
      ...params,
      createdAt: params.createdAt ?? new Date(),
    };
  }

  public get id(): string {
    return this._id;
  }

  public set recipientId(recipientId: string) {
    this.params.recipientId = recipientId;
  }

  public get recipientId(): string {
    return this.params.recipientId;
  }

  public set content(content: Content) {
    this.params.content = content;
  }

  public get content(): Content {
    return this.params.content;
  }

  public set category(category: string) {
    this.params.category = category;
  }

  public get category(): string {
    return this.params.category;
  }

  public set readAt(readAt: Date | null | undefined) {
    this.params.readAt = readAt;
  }

  public get readAt(): Date | null | undefined {
    return this.params.readAt;
  }

  public get createdAt(): Date {
    return this.params.createdAt;
  }
}
