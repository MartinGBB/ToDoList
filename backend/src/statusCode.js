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

const ID_IS_REQUIRE = {
  error: {
    status: StatusCodes.UNPROCESSABLE_ENTITY,
    message: "id is required",
  },
};

const NOT_UPDATE = {
  error: {
    status: StatusCodes.NOT_FOUND,
    message: "Tarefa não atualizada, verifique os dados",
  },
};


module.exports = {
  EMPTY_TASK,
  EMPTY_CATEGORY,
  ID_IS_REQUIRE,
  NOT_UPDATE,
};
