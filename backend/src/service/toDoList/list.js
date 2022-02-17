const list = require('../../models/recipes');

module.exports = async () => {
  const listDB = await list.find();
  return { status: 200, message: listDB};
};
