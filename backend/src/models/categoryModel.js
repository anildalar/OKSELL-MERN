const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true
    },
    slug:{
        type:String,
        unique:true
    },
    parentId:{
        type:String,
        unique:true
    }
},{ timestamps:true });


//export

module.exports = mongoose.model('category', categorySchema );