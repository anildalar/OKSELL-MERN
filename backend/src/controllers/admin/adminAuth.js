//Default Import
const userModel = require("../../models/userModel");
//const bcrypt = require("bcrypt");
var jwt = require('jsonwebtoken');


//Named Export
exports.signup = (req,res,next)=>{
    
    //console.log(req.body.fname);
   // console.log(req.body.lname);

    //Destructuring the data // Named Import
    const { firstName,lastName,username,email,password  } = req.body;

   // console.log(fn);
   // console.log(firstName);
    //console.log(lastName);

    //Check if the username and email already exists
    userModel.findOne({ email: email }).exec((error,user)=>{
        console.log(user);
        if(user){
            res.status(400).json({
                msg:"User Already Exits"
            });
        }else{
           // var hash_password ='';
           
            //bcrypt.hash(password, 10, function(err, hash) {
                //hash_password = hash;
            //});

            //console.log(hash_password);
           // hash_password='123';
            let role = 'admin';
            const user = new userModel({ firstName,lastName,username,email,password,role });
            //console.log(user);
            //Save the info
            user.save((error,data)=>{
                if(error){
                    return res.status(400).json({
                        msg:error
                    });
                }
                if(data){
                    return res.status(200).json({
                        user: data
                    });
                }
            });
        }
    });
}

//We are exporting a fat arrow function
// Named Export
exports.signin = (req,res,next)=>{
    //Destructing/ Named Import
    const { email,password } = req.body;

    console.log(email);
    console.log(password);

    //Check with the DB wheather the email and password exits or not
    userModel.findOne({ email: email }).exec((error,user)=>{
        //Check if any error occured
        if(error) return res.status(400).json({ err: error });

        if(user){
            //true
            console.log(password);
            const isPassword = user.authenticate(password);
            if(isPassword){
                //Token Encoding
                var token = jwt.sign({ _id: user._id,role:user.role }, process.env.JWT_SECRET,{expiresIn:'1h'});

                return res.status(200).json({
                    token: token,
                    data: user,
                    msg: 'Welcome'
                 });
            }else{
                return res.status(403).json({ msg: 'Invalid credentials' });
            }

            //Check if the password is correct

           
        }else{
            //false
            return res.status(404).json({ msg: 'user doesnot exits' })
        }

    });
}