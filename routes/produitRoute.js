const express=require('express');
const router=express.Router();
const {addproduit,deleteproduit,editproduit,afficherproduit}=require ('../controllers/produit')

router.get("/afficherproduit",afficherproduit);
router.post("/addproduit",addproduit);
router.delete("/deleteproduit/:id",deleteproduit);
router.put("/editproduit/:id",editproduit);

module.exports= router;