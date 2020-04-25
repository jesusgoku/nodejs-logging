import os from 'os';
import { createLogger, transports, format } from 'winston';

import { APP_NAME, LOG_LEVEL } from './config';

const hostname = os.hostname();

function winstonConsoleFormat() {
  return format.printf(({ timestamp, level, message, metadata, service }) => {
    const metadataString = metadata !== null ? JSON.stringify(metadata) : '';

    return `[${timestamp}][${level}][${service}@${hostname}] ${message}. metadata: ${metadataString}`;
  });
}

const logger = createLogger({
  level: LOG_LEVEL.toLowerCase(),
  defaultMeta: { service: APP_NAME },
  transports: [
    new transports.Console({
      format: format.combine(
        format.timestamp(),
        format.prettyPrint(),
        format.metadata({ fillExcept: ['timestamp', 'service', 'level', 'message'] }),
        format.colorize(),
        winstonConsoleFormat(),
      ),
    }),
  ],
});

export default logger;
