const loginAuthenticate = (req, res, next) =>{
    
    console.log(req.body);


    next();
}

module.exports={loginAuthenticate};