var express = require('express');
const { auth, isAdminToken } = require('../common-middleware');
const categoryModel = require("../models/categoryModel");
var router = express.Router();

router.post('/category/create',auth,isAdminToken,function(req,res,next){
    
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

router.post('/category/delete',auth,isAdminToken,async function(req,res){
    //req.body.something
    console.log(req.body._id);

    const deleteCategory = await categoryModel.findOneAndDelete({
        _id:req.body._id
    });
    if(deleteCategory){
        res.status(200).json({
            msg:"Category Deleted Successfully"
        });
    }else{
        res.status(401).json({
            msg:"Unable to Deleted Category"
        });
    }
  });

module.exports = router;