const connection = require('../connection');

module.exports = async () => {
  const db = await connection();
  const result = await db.collection('task').find().toArray();
  return result;
};
