var express = require('express');
const { auth, isAdminToken } = require('../common-middleware');
//Named Import {  }
const { createCategory, deleteCategory, getCategory } = require('../controllers/category');
var router = express.Router();

router.post('/category/create',auth,isAdminToken,createCategory);

router.get('/category/get',getCategory);

router.post('/category/delete',auth,isAdminToken,deleteCategory);



module.exports = router;