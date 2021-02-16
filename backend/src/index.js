//1. Import Area
const express = require('express');
const app = express();
const env = require('dotenv');
var bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoute');

const mongoose = require('mongoose');

env.config();

//   http://project:4000/api/getsometing
//Middleware

//app.use(express.json());
app.use(bodyParser.json());

app.use('/api',userRoutes);

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
