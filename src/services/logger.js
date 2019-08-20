import winston from 'winston';

const env = process.env.NODE_ENV;

const formatter = winston.format.printf((info) => {
  let { message } = info;
  if (typeof (message) === 'object') {
    message = JSON.stringify(message);
  }

  return `${info.timestamp} - [${info.level}] :: ${message}`;
});

const createDebugLogger = () => winston.createLogger({
  level: 'debug',
  format: winston.format.combine(winston.format.timestamp(), formatter),
  transports: [
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/debug.log', level: 'debug' }),
    new winston.transports.Console(),
  ],
});

const createProductionLogger = () => winston.createLogger({
  level: 'debug',
  format: winston.format.combine(winston.format.timestamp(), formatter),
  transports: [
    new winston.transports.Console(),
  ],
});

const logger = env === 'development' ? createDebugLogger() : createProductionLogger();

export default logger;
