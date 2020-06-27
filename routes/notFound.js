var express = require('express');
var router = express.Router();

router.get('*', (req,res,next)=> {
    res.render('../views/notFound');
})

module.exports = router;