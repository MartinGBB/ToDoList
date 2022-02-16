const express = require('express');
const toDoList = require('./toDoList/routes');

const root = express.Router({ mergeParams: true });

root.use('/', toDoList);

module.exports = root;
