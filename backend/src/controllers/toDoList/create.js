// const { StatusCodes } = require('http-status-codes');
const service = require('../../service');

module.exports = async (req, res, next) => {
  try {
    const data = req.body;
    const createTask = await service.create(data);
    return res.status(createTask.status).json(createTask.message);
  } catch (err) {
    next(err);
  }
};
