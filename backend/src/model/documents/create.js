const connection = require('../connection');

module.exports = async (data) => {
  const db = await connection();
  const result = await db.collection('task').insertOne({ data });
  return result;
};
