const { StatusCodes } = require('http-status-codes');
const service = require('../../service/create');

module.exports = async (req, res, next) => {
  try {
    const data = req.body;
    const createTask = await service.create(data);
    return res.status(StatusCodes.CREATED).send(createTask);
  } catch (err) {
    next(err);
  }
};
