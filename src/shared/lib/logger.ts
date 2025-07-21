import pino from 'pino';
import { config } from './config';

export const logger = pino({
    level: config.logLevel,
    transport: config.isDevelopment ? {
        target: 'pino-pretty',
        options: {
            colorize: true,
            translateTime: 'HH:MM:ss Z',
            ignore: 'pid,hostname'
        }
    } : undefined
}); 