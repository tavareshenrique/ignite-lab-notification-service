import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repositories';
import { makeNotification } from '@test/factories/notification-factory';

import { GetRecipientNotification } from './get-recipient-notifications';

describe('Cancel Notifications', () => {
  it('should be able to get recipient  notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const getRecipientNotification = new GetRecipientNotification(
      notificationsRepository,
    );

    const notification1 = makeNotification({ recipientId: 'user-1' });

    const notification2 = makeNotification({ recipientId: 'user-1' });

    const notification3 = makeNotification({ recipientId: 'user-2' });

    await notificationsRepository.create(notification1);
    await notificationsRepository.create(notification2);
    await notificationsRepository.create(notification3);

    const { notifications } = await getRecipientNotification.execute({
      recipientId: 'user-1',
    });

    expect(notifications).toHaveLength(2);
    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ id: notification1.id }),
        expect.objectContaining({ id: notification2.id }),
      ]),
    );
  });
});
