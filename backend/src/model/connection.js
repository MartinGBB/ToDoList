const { MongoClient } = require('mongodb');

require('dotenv').config();
const { HOST } = process.env;

const URL = `mongodb://${HOST || 'localhost'}:27017`;
const CLIENT = new MongoClient(URL);
const DB_NAME = 'toDoList';
const connection = null;
