var express = require('express');
var jwt = require('jsonwebtoken');
//Named Import
const { signup, signin } = require('../controllers/auth');
var router = express.Router();

//endpoints = routes
router.get('/getsomething',function(req,res,next){
    res.status(200).send({ msg:'Found'});
})

// /api/saveuser
router.post('/signup',signup);

router.post('/signin',signin);


/**
 * router.post(endpoint,middleware,callback);
 * router.get(endpoint,middleware,callback);
 */
function auth(req,res,next){
    //access the authorization token
    const token = req.headers.authorization.split(" ")[1];
    // console.log(token);
    
    //verify the token
   
     try {
        var user =jwt.verify(token, process.env.JWT_SECRET);
        next();
    } catch (error) {
        res.status(403).json({
            msg:'Invalid TOKEN'
        });
  }
}
   

router.post('/userprofile', auth ,function(req,res,next){
    res.status(200).json({
        msg:'User Profile'
    });
});


//export this router to use in our index.js
module.exports = router;