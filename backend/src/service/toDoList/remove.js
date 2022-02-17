const remove = require('../../model/documents/remove');

module.exports = async (data) => {
  const removeDB = await remove(data);
  return { status: 204, removeDB };
};
