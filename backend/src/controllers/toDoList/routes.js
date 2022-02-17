const express = require('express');
const create = require('./create');
const list = require('./list');

const router = express.Router({ mergeParams: true });

router.post('/', create);
router.get('/', list);

module.exports = router;
