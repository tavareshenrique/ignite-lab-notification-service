import { Notification } from '@application/entities/notifications';

import { NotificationsRepository } from '@application/repositories/notifications-repository';

export class InMemoryNotificationsRepository
  implements NotificationsRepository
{
  public notitications: Notification[] = [];

  async create(notification: Notification) {
    this.notitications.push(notification);
  }
}
