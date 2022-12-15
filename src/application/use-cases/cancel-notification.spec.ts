import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repositories';
import { makeNotification } from '@test/factories/notification-factory';

import { CancelNotification } from './cancel-notification';

describe('Cancel Notifications', () => {
  it('should be able to send a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const cancelNotification = new CancelNotification(notificationsRepository);

    const notification = makeNotification();

    await notificationsRepository.create(notification);

    await cancelNotification.execute({
      notificationId: notification.id,
    });

    expect(notificationsRepository.notitications[0].canceledAt).toEqual(
      expect.any(Date),
    );
  });

  it('should not be able to cancel a notification that does not exist', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();

    const cancelNotification = new CancelNotification(notificationsRepository);

    await expect(
      cancelNotification.execute({
        notificationId: 'notification-1',
      }),
    ).rejects.toThrowError();
  });
});
