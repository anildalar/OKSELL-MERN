var express = require('express');
const categoryModel = require("../models/categoryModel");
var router = express.Router();

router.post('/category/create',function(req,res,next){
    
    //Destructure
    const { name,slug,parentId } = req.body;

    const cat = new categoryModel({ name,slug,parentId });
    
    cat.save((error,category)=>{
        if(error) res.status(400).json(error);
        res.status(200).json({
            msg:"Category created Successfully",
            category:category
        });

    });
});


module.exports = router;