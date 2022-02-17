const { ObjectId } = require('mongodb');
const connection = require('../connection');

module.exports = async (id) => {
  const db = await connection();
  const result = await db.collection('task').deleteOne({ _id: ObjectId.isValid(id) });
  return result;
};
