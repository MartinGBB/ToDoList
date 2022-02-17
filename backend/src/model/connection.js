const { MongoClient } = require('mongodb');

require('dotenv').config();

const HOST = process.env.HOST || 'localhost';
const DB_NAME = process.env.DB_NAME || 'toDoList';

const URL = `mongodb://${HOST}:27017/toDoList`;
let connection = null;

module.exports = async () => {
  try {
    connection = connection || (connection = (await MongoClient.connect(
      URL,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    )).db(DB_NAME));
    return connection;
  } catch (err) {
    process.exit(1);
  }
};
