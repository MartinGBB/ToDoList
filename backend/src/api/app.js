const express = require('express')
const root = require('../controllers/root');

const app = express();
app.use(express.json());

app.get('/', root);

module.exports = app;
