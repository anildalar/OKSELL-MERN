var jwt = require('jsonwebtoken');

exports.auth = (req,res,next) =>{
    console.log('Auth called');
    //access the authorization token
    if(req.headers.authorization){
        const token = req.headers.authorization.split(" ")[1];
            // console.log(token);
            
            //verify the token
        
            try {
                //Token Decode

                var user =jwt.verify(token, process.env.JWT_SECRET);
                req.user = user;
                next();
            } catch (error) {
                res.status(403).json({
                    msg:'Invalid TOKEN'
                });
        }
    }else{
        res.status(403).json({
            msg:'Authorization Header is required'
        });
    }
    
}

exports.isUserToken = (req,res,next)=>{

    //Check if it is an User Token
    if(req.user.role !== 'user' ){
        res.status(403).json({msg:"Invalid User Token"});
    }else{
        next();
    }
    //req.user 
}

exports.isAdminToken = (req,res,next)=>{

    //Check if it is an User Token
    if(req.user.role !== 'admin' ){
        res.status(403).json({msg:"Invalid Admin Token"});
    }else{
        next();
    }
    //req.user 
}