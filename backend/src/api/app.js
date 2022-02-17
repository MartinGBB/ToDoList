const express = require('express')
const cors = require('cors');
const root = require('../controllers/root');
const error = require('../middleware/error');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/', root);
app.use(error);

module.exports = app;
