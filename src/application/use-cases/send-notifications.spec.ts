import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repositories';

import { SendNotifications } from './send-notifications';

describe('Send Notifications', () => {
  it('should be able to send a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const sendNotifications = new SendNotifications(notificationsRepository);

    const { notification } = await sendNotifications.execute({
      content: 'You receive a friend request from John Doe',
      category: 'social',
      recipientId: 'example-recipient-id',
    });

    expect(notificationsRepository.notitications).toHaveLength(1);
    expect(notificationsRepository.notitications[0]).toEqual(notification);
  });
});
