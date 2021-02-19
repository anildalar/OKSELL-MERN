const { check, validationResult } = require("express-validator");

exports.validationRequest = [
    check('firstName').notEmpty().withMessage('FirstName is required'),
    check('lastName').notEmpty().withMessage('LastName is required'),
    check('email').notEmpty().isEmail().withMessage("Email is required"),
    check("username").notEmpty().isLength({min:6}).withMessage("Username must be 6 character long"),
    check('password').notEmpty().isLength({min:6}).withMessage("Password must be 6 character logn")
];

exports.isRequestValidated = (req,res,next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
}

