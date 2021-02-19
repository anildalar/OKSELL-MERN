var express = require('express');
var jwt = require('jsonwebtoken');
//Named Import
const { signup, signin,auth } = require('../controllers/auth');
var router = express.Router();
const { validationRequest, isRequestValidated } = require('../validators/validator');

//endpoints = routes
router.get('/getsomething',function(req,res,next){
    res.status(200).send({ msg:'Found'});
})

// /api/saveuser
router.post('/signup', validationRequest, isRequestValidated  ,signup);

router.post('/signin',signin);


/**
 * router.post(endpoint,middleware,callback);
 * router.get(endpoint,middleware,callback);
 */

 //DRY 

   

router.post('/userprofile' ,function(req,res,next){
    res.status(200).json({
        msg:'User Profile'
    });
});


//export this router to use in our index.js
module.exports = router;