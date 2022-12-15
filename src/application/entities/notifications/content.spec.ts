import { Content } from './content';

describe('Notification > Content', () => {
  it('should be able to create a notification content', () => {
    const contentMessage = 'You receive a friend request from John Doe';

    const content = new Content(contentMessage);

    expect(content.value).toBe(contentMessage);
  });

  it('should not be able to create a notification content with less than 5 characters', () => {
    const contentMessage = '123';

    expect(() => {
      new Content(contentMessage);
    }).toThrow();
  });

  it('should not be able to create a notification content with more than 240 characters', () => {
    const contentMessage = 'a'.repeat(241);

    expect(() => {
      new Content(contentMessage);
    }).toThrow();
  });
});
