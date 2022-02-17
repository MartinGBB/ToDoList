const { ObjectId } = require('mongodb');
const connection = require('../connection');

module.exports = async (entity) => {
  const db = await connection();
  const { id } = entity;
  const { task, category, status } = entity.body;
  const data = { $set: { task, category, status } };

  const response = await db.collection('task').updateOne({ _id: ObjectId(id) }, data);
  return response;
};
  