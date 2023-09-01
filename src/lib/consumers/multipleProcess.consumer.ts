import { OnQueueActive, OnQueueCompleted, OnQueueError, OnQueueFailed, OnQueueStalled } from "@nestjs/bull";
import { Processor, Process } from "@nestjs/bull";
import { Job } from "bull";

@Processor('multipleProcessQueue')
export class MultipleProcessConsumer {
  constructor () {}

  @OnQueueError()
  onQueueError(error: Error): void {
    console.log('Example queue error: ', error)
  }

  @OnQueueStalled()
  onQueueStalled(jobId: string) {
    console.log(`Job: ${jobId} is stalled`)
  }

  @OnQueueActive()
  onQueueActive(jobId: string) {
    console.log(`Processing multiple process job: ${jobId}`)
  }

  @OnQueueCompleted()
  onQueueCompleted(jobId: string) {
    console.log(`Job: ${jobId} is completed in multiple process`)
  }

  @OnQueueFailed()
  onQueueFailed(jobId: string) {
    console.log(`Job: ${jobId} is failed in multiple process`)
  }

  @Process('process1')
  async process1 (job: Job): Promise<void> {
    console.log('multiple process1', job.id)
  }
  @Process('process2')
  async process2 (job: Job): Promise<void> {
    console.log('multiple process2', job)
  }

  @Process('process3')
  async process3 (job: Job): Promise<void> {
    console.log('multiple process3', job)
  }

  @Process('process4')
  async process4 (job: Job): Promise<void> {
    console.log('multiple process4', job)
  }

  @Process('process5')
  async process5 (job: Job): Promise<void> {
    console.log('multiple process5', job)
  }

  @Process('process6')
  async process6 (job: Job): Promise<void> {
    console.log('multiple process6', job)
  }

  @Process('process7')
  async process7 (job: Job): Promise<void> {
    console.log('multiple process7', job)
  }

  @Process('process8')
  async process8 (job: Job): Promise<void> {
    console.log('multiple process8', job)
  }

  @Process('process9')
  async process9 (job: Job): Promise<void> {
    console.log('multiple process9', job)
  }
}
