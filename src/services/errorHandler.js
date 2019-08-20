import httpStatus from 'http-status';

const isDevelopment = process.env.NODE_ENV === 'development';

const handleGeneric = (err, req, res, next) => {
  const response = {
    code: err.status,
    message: err.message || httpStatus[err.status],
    errors: err.errors,
    stack: err.stack,
  };

  if (!isDevelopment) {
    // Non-development environment should not save stack
    delete response.stack;
  }

  res.status(err.status);
  res.json(response);
  res.end();
};

const handleNotFound = (req, res, next) => {
  const error = {
    status: httpStatus.NOT_FOUND,
    message: 'Not found',
  };

  return handleGeneric(error, req, res);
};

export default {
  generic: handleGeneric,
  notFound: handleNotFound,
};
