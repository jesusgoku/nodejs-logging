import logger from './logger';

// eslint-disable-next-line no-unused-vars
function errorHandler(err, req, res, next) {
  if (err) {
    logger.error(err.message, { stack: err.stack });
  }

  res.status(500).json({ error: 'Something went wrong' });
}

export {
  // eslint-disable-next-line import/prefer-default-export
  errorHandler,
};
