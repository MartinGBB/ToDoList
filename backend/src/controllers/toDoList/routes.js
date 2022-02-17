const express = require('express');
const remove = require('./remove');
const create = require('./create');
const list = require('./list');

const router = express.Router({ mergeParams: true });

router.post('/', create);
router.get('/', list);
router.delete('/:id', remove);

module.exports = router;
