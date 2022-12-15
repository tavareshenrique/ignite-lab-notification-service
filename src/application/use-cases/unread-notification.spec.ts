import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repositories';
import { makeNotification } from '@test/factories/notification-factory';

import { UnreadNotification } from './unread-notification';

describe('Cancel Notifications', () => {
  it('should be able to read a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const unreadNotification = new UnreadNotification(notificationsRepository);

    const notification = makeNotification({
      readAt: new Date(),
    });

    await notificationsRepository.create(notification);

    await unreadNotification.execute({
      notificationId: notification.id,
    });

    expect(notificationsRepository.notitications[0].readAt).toBeNull();
  });

  it('should not be able to read a notification that does not exist', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();

    const cancelNotification = new UnreadNotification(notificationsRepository);

    await expect(
      cancelNotification.execute({
        notificationId: 'notification-1',
      }),
    ).rejects.toThrowError();
  });
});
