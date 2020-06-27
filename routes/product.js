var express = require('express');
var router = express.Router();
var Product = require('../controller/product')

/* GET products. */
router.get('/', Product.index);
router.get('/create', Product.create);
router.post('/save', Product.save);
router.get('/:id/edit', Product.edit);
router.get('/:id', Product.show);
router.post('/delete/:id', Product.destroy);
router.post('/:id', Product.update);

module.exports = router;
