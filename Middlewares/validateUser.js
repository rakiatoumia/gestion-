const { body} = require('express-validator');

exports.validateUser= [ 
    body('firstname').isAlpha(),
    body('email').isEmail(),
    body('password').isLength({ min: 5 })
]
   
