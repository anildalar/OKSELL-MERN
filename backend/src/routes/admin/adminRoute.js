var express = require('express');
var jwt = require('jsonwebtoken');
//Named Import
const { signup, signin } = require('../../controllers/admin/adminAuth');
var router = express.Router();

// /api/saveuser
router.post('/admin/signup',signup);

router.post('/admin/signin',signin);


/**
 * router.post(endpoint,middleware,callback);
 * router.get(endpoint,middleware,callback);
 */
function auth(req,res,next){
    next();
}
   
router.post('/admin/adminprofile', auth,function(req,res,next){
    res.status(200).json({
        msg:'Admin Profile'
    });
});


//export this router to use in our index.js
module.exports = router;