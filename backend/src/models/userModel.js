const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:false,
        trim:true,
        min:2,
        max:20
    },
    lastName:{
        type:String,
        required:false,
        trim:true,
        min:2,
        max:20
    },
    username:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        index:true,
        lowercase:true
    },
    hash_password:{
        type: String,
        required: true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        lowercase:true
    },
    role:{
        type:String,
        enum:["user", "admin"],
        default:"user"
    },
    contactNumber: { type: String },
    pofilePicture: { type: String },
});

//Mongo Virtual Fields
userSchema.virtual('password').set(function(password){
    this.hash_password = bcrypt.hashSync(password, 10);
});

userSchema.methods = {
    //Method Defination
    authenticate:function(password){ //password is an formal arg
        //bcrypt.compareSync(myPlaintextPassword, hash); // true
        return bcrypt.compareSync(password, this.hash_password);
    }

};


//default Export
module.exports = mongoose.model('users',userSchema);