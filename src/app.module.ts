import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { REDIS_DB, REDIS_HOST, REDIS_PORT } from './dependencies/config';

import { MultipleProcessConsumer } from './lib/consumers/multipleProcess.consumer';
import { SingleProcessConsumer } from './lib/consumers/singleProcess.consumer';

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: REDIS_HOST,
        port: REDIS_PORT,
        db: REDIS_DB,
        commandTimeout: 10000
      },
      settings: {
        stalledInterval: 1000 * 60 * 0.1,
        maxStalledCount: 100
      },
      defaultJobOptions: {
        timeout: 1000 * 60 * 0.5,
        attempts: 5,
        delay: 5000,
        backoff: {
          type: 'fixed',
        }
      }
    }),

    MultipleProcessConsumer,
    BullModule.registerQueue({
      name: 'multipleProcessQueue'
    }),
    SingleProcessConsumer,
    BullModule.registerQueue({
      name: 'singleProcessQueue'
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
