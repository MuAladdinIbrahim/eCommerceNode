const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Product = mongoose.model('Product', new Schema({
    title:{
        type:String,
        required: true,
        trim: true,
    },
    description:{
        type: String,
        required: true,
        trim: true,
    },
    price:{
        type: Number,
        required: true,
        default: 1,
        min: 1,
    },
    // inStock:{
    //     type: Boolean,
    //     default: true,
    // },
    // owner:{
    //     // type: mongoose.Schema.Types.ObjectId,
    //     // required: true,
    //     // ref:'Seller'
    //     type: String,
    // },

}))

module.exports = Product;