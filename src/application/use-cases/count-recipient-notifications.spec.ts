import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repositories';
import { makeNotification } from '@test/factories/notification-factory';

import { CountRecipientNotification } from './count-recipient-notifications';

describe('Cancel Notifications', () => {
  it('should be able to count recipient  notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRecipientNotification = new CountRecipientNotification(
      notificationsRepository,
    );

    const notification1 = makeNotification({ recipientId: 'user-1' });

    const notification2 = makeNotification({ recipientId: 'user-1' });

    const notification3 = makeNotification({ recipientId: 'user-2' });

    await notificationsRepository.create(notification1);
    await notificationsRepository.create(notification2);
    await notificationsRepository.create(notification3);

    const { count } = await countRecipientNotification.execute({
      recipientId: 'user-1',
    });

    expect(count).toEqual(2);
  });
});
