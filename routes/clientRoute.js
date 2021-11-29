const express=require('express');
const router=express.Router();
const {addclient,deleteclient,editclient, afficherclient}=require ('../controllers/client')

router.get("/afficherclient",afficherclient);
router.post("/addclient",addclient);
router.delete("/deleteclient/:id",deleteclient);
router.put("/editclient/:id",editclient);

module.exports= router;