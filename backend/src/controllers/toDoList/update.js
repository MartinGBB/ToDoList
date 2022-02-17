const service = require('../../service');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const data = { id, body };

    const update = await service.update(data);
    const { status, message } = update;

    return res.status(status).json({ message });
  } catch (error) {
    next(error);
  }
};
