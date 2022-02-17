const service = require('../../service');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const remove = await service.remove(id);
    const { status, message } = remove;
    res.status(status).json({ message });
  } catch (error) {
    next(error);
  }
};
