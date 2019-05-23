import pino from 'express-pino-logger';

const logger = pino({
  level: 'trace',
});

export default logger;
