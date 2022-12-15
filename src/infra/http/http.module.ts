import { Module } from '@nestjs/common';

import { SendNotifications } from 'src/application/use-cases/send-notifications';
import { DatabaseModule } from '../database/database.module';
import { NotificationsController } from './controllers/notifications.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [SendNotifications],
})
export class HttpModule {}
