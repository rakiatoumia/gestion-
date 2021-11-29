const express=require('express');
const router=express.Router();
const {authMiddleware}=require ('../Middlewares/authMiddleware')
const {post,getPost}=require ('../controllers/Post')

router.post("/addPost",authMiddleware,post);
router.get("/getPost",getPost);


module.exports= router;