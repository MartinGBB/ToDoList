const { StatusCodes } = require('http-status-codes');

const EMPTY_TASK = {
  error: {
    status: StatusCodes.UNPROCESSABLE_ENTITY,
    message: "Empty 'task' field",
  },
};

const EMPTY_CATEGORY = {
  error: {
    status: StatusCodes.UNPROCESSABLE_ENTITY,
    message: "Empty 'category' field",
  },
};

module.exports = {
  EMPTY_TASK,
  EMPTY_CATEGORY
};
