import { BullModule, InjectQueue } from '@nestjs/bull';
import { Injectable, Module } from '@nestjs/common';
import { MultipleProcessConsumer } from './lib/consumers/multipleProcess.consumer';
import { Queue } from 'bull';
import { SingleProcessConsumer } from './lib/consumers/singleProcess.consumer';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'multipleProcessQueue'
    }),
    MultipleProcessConsumer,
    BullModule.registerQueue({
      name: 'singleProcessQueue'
    }),
    SingleProcessConsumer
  ]
})

@Injectable()
export class AppService {
  constructor (
    @InjectQueue('multipleProcessQueue') private readonly multipleProcessQueue: Queue,
    @InjectQueue('singleProcessQueue') private readonly singleProcessQueue: Queue,
  ) {}

  async onModuleInit(): Promise<void> {
    console.log(`Initialization...`);
    await this.multipleProcessQueue.add('process2', { jobName: 'First job on multiple processes queue' })

    await this.singleProcessQueue.add('process1', { jobName: 'Second job on single process queue' })

    setInterval(() => {
      this.multipleProcessQueue.add('process2', { jobName: 'First job on multiple processes queue' })
    }, 30000)
  }

  getHello(): string {
    return 'Hello World!';
  }
}
