import { Processor, Process, OnQueueError, OnQueueFailed, OnQueueCompleted, OnQueueActive } from "@nestjs/bull";
import { Job } from "bull";

@Processor('singleProcessQueue')
export class SingleProcessConsumer {
  constructor () {}

  @OnQueueError()
  onQueueError(error: Error): void {
    console.log('Single process queue error: ', error)
  }

  @OnQueueActive()
  onQueueActive(jobId: string) {
    console.log(`Processing single process job: ${jobId}`)
  }

  @OnQueueCompleted()
  onQueueCompleted(jobId: string) {
    console.log(`Job: ${jobId} is completed in single process`)
  }

  @OnQueueFailed()
  onQueueFailed(jobId: string) {
    console.log(`Job: ${jobId} is failed in single process`)
  }

  @Process('process1')
  async process1 (job: Job): Promise<void> {
    console.log('example2.process1: ', job.id)
  }
}
