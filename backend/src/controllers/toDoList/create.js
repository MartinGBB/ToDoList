const service = require('../../service');

module.exports = async (req, res, next) => {
  try {
    const data = req.body;
    const createTask = await service.create(data);
    const { message, status } = createTask;
    return res.status(status).json({ message });
  } catch (err) {
    next(err);
  }
};
