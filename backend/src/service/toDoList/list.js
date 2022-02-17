const list = require('../../model/documents/list');

module.exports = async () => {
  const listDB = await list();
  return { status: 200, message: listDB};
};
