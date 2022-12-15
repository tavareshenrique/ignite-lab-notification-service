import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repositories';

import { SendNotification } from './send-notification';

describe('Send Notifications', () => {
  it('should be able to send a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const sendNotification = new SendNotification(notificationsRepository);

    const { notification } = await sendNotification.execute({
      content: 'You receive a friend request from John Doe',
      category: 'social',
      recipientId: 'example-recipient-id',
    });

    expect(notificationsRepository.notitications).toHaveLength(1);
    expect(notificationsRepository.notitications[0]).toEqual(notification);
  });
});
