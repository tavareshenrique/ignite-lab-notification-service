import { Notification } from './';
import { Content } from './content';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notifications = new Notification({
      content: new Content('You receive a friend request from John Doe'),
      category: 'social',
      recipientId: '123',
    });

    expect(notifications).toBeTruthy();
  });
});
