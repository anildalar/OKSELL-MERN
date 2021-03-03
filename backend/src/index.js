//1. Import Area
const express = require('express');
const app = express();
const env = require('dotenv');
var bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoute');
const adminRoutes = require('./routes/admin/adminRoute');
const categoryRoutes = require('./routes/category');

var multer  = require('multer');

const mongoose = require('mongoose');

env.config();

//   http://project:4000/api/getsometing
//Middleware

//app.use(express.json());
app.use(bodyParser.json());

app.use('/api',userRoutes);
app.use('/api',adminRoutes);

app.use('/api',categoryRoutes);

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        console.log(file);
      cb(null, file.fieldname + '-' + Date.now()+file.originalname);
    }
  })
   
var upload = multer({ storage: storage })
app.post('/api/profile', upload.single('mypic'), function (req, res, next) {
   res.status(200).json({
       msg:"File Uploaded Successfully"
   });
});

console.log(`${process.env.MONGODB_USER}`);

mongoose.connect(
                `mongodb+srv://okselluser:admin@123@oksell-cluster0.dsstc.mongodb.net/oksell?retryWrites=true&w=majority`, //Connection String
                {
                    useNewUrlParser: true,
                    useUnifiedTopology: true
                }
            ).then(function(){
                console.log('Connected');
            });

//user Middleware

app.listen(process.env.PORT,function(){
    console.log(`Server is running on port ${process.env.PORT}`);
})
