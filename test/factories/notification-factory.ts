import {
  Notification,
  INotificationParams,
} from '@application/entities/notifications';

import { Content } from '@application/entities/notifications/content';

type TOverride = Partial<INotificationParams>;

export function makeNotification(override: TOverride = {}) {
  return new Notification({
    category: 'social',
    content: new Content('You have a new message'),
    recipientId: 'user-2',
    ...override,
  });
}
