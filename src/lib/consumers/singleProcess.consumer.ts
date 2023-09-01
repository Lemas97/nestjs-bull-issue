import { Processor, Process, OnQueueError, OnQueueFailed, OnQueueCompleted, OnQueueActive, OnQueueStalled } from "@nestjs/bull";
import { Job } from "bull";

@Processor('singleProcessQueue')
export class SingleProcessConsumer {
  constructor () {}

  @OnQueueError()
  onQueueError(error: Error): void {
    console.log('Single process queue error: ', error)
  }

  @OnQueueStalled()
  onQueueStalled(job: Job) {
    console.log(`Job: ${job.id} is stalled on single process`)
  }

  @OnQueueActive()
  onQueueActive(jobId: string) {
    console.log(`Processing single process job: ${jobId}`)
  }

  @OnQueueCompleted()
  onQueueCompleted(jobId: string) {
    console.log(`Job: ${jobId} is completed on single process`)
  }

  @OnQueueFailed()
  onQueueFailed(jobId: string) {
    console.log(`Job: ${jobId} is failed on single process`)
  }

  @Process('process1')
  async process1 (job: Job): Promise<void> {
    console.log('example2.process1: ', job.id)
  }
}
