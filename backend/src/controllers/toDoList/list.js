const service = require('../../service');

module.exports = async (_req, res, next) => {
  try {
    const find = await service.list();
    const { status, message } = find;
    res.status(status).json(message);
  } catch (error) {
    next(error);
  }
};
