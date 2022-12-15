import { Notification } from '@application/entities/notifications';

import { NotificationsRepository } from '@application/repositories/notifications-repository';

export class InMemoryNotificationsRepository
  implements NotificationsRepository
{
  async findById(notificationId: string): Promise<Notification | null> {
    const notification = this.notitications.find(
      (notification) => notification.id === notificationId,
    );

    if (!notification) {
      return null;
    }

    return notification;
  }

  async findManyByRecipientId(recipientId: string): Promise<Notification[]> {
    return this.notitications.filter(
      (notification) => notification.recipientId === recipientId,
    );
  }

  async countManyByRecipientId(recipientId: string): Promise<number> {
    return this.notitications.filter(
      (notification) => notification.recipientId === recipientId,
    ).length;
  }

  public notitications: Notification[] = [];

  async create(notification: Notification) {
    this.notitications.push(notification);
  }

  async save(notification: Notification): Promise<void> {
    const notificationIndex = this.notitications.findIndex(
      (notification) => notification.id === notification.id,
    );

    if (notificationIndex >= 0) {
      this.notitications[notificationIndex] = notification;
    }
  }
}
