const mongoose = require('mongoose')
const schema = mongoose.Schema

const products = new schema({
    image: {
        required: true,
        type: String
    },
    keyword:{
        type:Array
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type: String,
    },
    status:{
        type:Boolean,
        default: true
    },
    price:{
        type:String,
        default:'Liên hệ'
    },
    quantity:{
        type:Number
    }

},{ timestamps: true })


module.exports = mongoose.model('products',products)