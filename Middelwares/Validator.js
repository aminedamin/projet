const{body,validationResult} = require('express-validator')
exports.registerValidation =[
    body('email','not a valid email').isEmail(),
    body('password','password must contain 9 char').isLength({min : 8})
]

exports.logginValidation = [
    body('email','Not a valid email').isEmail()
]

exports.Validation=(res,req,next)=>{
    const errors= validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
next()
}

