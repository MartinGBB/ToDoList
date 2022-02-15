const express = require('express')
const root = require('../controllers/root');

const app = express();
app.use(express.json());

app.use('/', root);

module.exports = app;
