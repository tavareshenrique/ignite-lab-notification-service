import { Injectable } from '@nestjs/common';

import { Notification } from '@application/entities/notifications';

import { NotificationsRepository } from '../repositories/notifications-repository';

interface IGetRecipientNotificationRequest {
  recipientId: string;
}

interface IGetRecipientNotificationResponse {
  notifications: Notification[];
}

@Injectable()
export class GetRecipientNotification {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: IGetRecipientNotificationRequest,
  ): Promise<IGetRecipientNotificationResponse> {
    const { recipientId } = request;

    const notifications =
      await this.notificationsRepository.findManyByRecipientId(recipientId);

    return { notifications };
  }
}
