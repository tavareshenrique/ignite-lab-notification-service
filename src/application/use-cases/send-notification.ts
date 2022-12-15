import { Injectable } from '@nestjs/common';
import { Notification } from '../entities/notifications';
import { Content } from '../entities/notifications/content';

import { NotificationsRepository } from '../repositories/notifications-repository';

interface ISendNotificationRequest {
  recipientId: string;
  content: string;
  category: string;
}

interface ISendNotificationResponse {
  notification: Notification;
}

@Injectable()
export class SendNotification {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: ISendNotificationRequest,
  ): Promise<ISendNotificationResponse> {
    const { recipientId, content, category } = request;

    const contentValue = new Content(content);

    const notification = new Notification({
      recipientId,
      content: contentValue,
      category,
    });

    await this.notificationsRepository.create(notification);

    return { notification };
  }
}
