const express=require('express');
const router=express.Router();
const {register}=require ('../controllers/register')
const {login}=require ('../controllers/login')
const {validateUser}=require ('../Middlewares/validateUser')


router.post("/Register",validateUser,register)
router.post("/Login", login)

module.exports= router;