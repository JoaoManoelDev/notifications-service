import { Module } from '@nestjs/common';
import { NotificationsRepository } from '@application/repositories/notifications-repository';
import { PrismaService } from './prisma/prisma.service';
import { PrismaNotificationRepositoy } from './prisma/repositories/prisma-notification-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: NotificationsRepository,
      useClass: PrismaNotificationRepositoy,
    },
  ],
  exports: [NotificationsRepository],
})
export class DatabaseModule {}
