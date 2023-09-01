import Debug from 'debug'

export const DEBUG = process.env.DEBUG as string || '*'

export const REDIS_HOST: string = process.env.REDIS_HOST ?? 'localhost'
export const REDIS_PORT: number = parseInt(process.env.REDIS_PORT ?? '6379')
export const REDIS_DB: number = parseInt(process.env.REDIS_DB ?? '4')

Debug.enable(DEBUG)
