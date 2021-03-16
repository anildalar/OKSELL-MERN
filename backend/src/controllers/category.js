const categoryModel = require("../models/categoryModel");

//named export
exports.createCategory = function(req,res){
    
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
}

exports.getCategory  = function(req,res){
    console.log('get Category');
    categoryModel.find({}).exec((error,categories)=>{
        if(error) res.status(400).json(error);
        if(categories){
            res.status(200).json({
                msg:'ok',
                data:categories
            });
        }
    });
}

exports.deleteCategory = async function(req,res){
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
}