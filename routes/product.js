var express = require('express');
var router = express.Router();
var Product = require('../controller/product')
/* GET products. */

router.get('/', Product.index);
router.get('/create', Product.create);
router.post('/save', Product.save);
router.get('/:id/edit', Product.edit);
router.get('/:id', Product.show);
router.put('/:id', Product.update);
router.delete('/:id', Product.destroy);

module.exports = router;
