const mongoose = require('mongoose');
const config = require('../config/index')
mongoose.connect(config.mongodb.dsn ,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:true,
    useUnifiedTopology: true,
})