import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repositories';
import { makeNotification } from '@test/factories/notification-factory';

import { ReadNotification } from './read-notification';

describe('Cancel Notifications', () => {
  it('should be able to read a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const readNotification = new ReadNotification(notificationsRepository);

    const notification = makeNotification();

    await notificationsRepository.create(notification);

    await readNotification.execute({
      notificationId: notification.id,
    });

    expect(notificationsRepository.notitications[0].readAt).toEqual(
      expect.any(Date),
    );
  });

  it('should not be able to read a notification that does not exist', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();

    const cancelNotification = new ReadNotification(notificationsRepository);

    await expect(
      cancelNotification.execute({
        notificationId: 'notification-1',
      }),
    ).rejects.toThrowError();
  });
});
