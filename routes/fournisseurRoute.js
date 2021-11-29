const express=require('express');
const router=express.Router();
const {addfournisseur,deletefournisseur,editfournisseur,afficherfournisseur}=require ('../controllers/fournisseur')

router.get("/afficherfournisseur",afficherfournisseur);
router.post("/addfournisseur",addfournisseur);
router.delete("/deletefournisseur/:id",deletefournisseur);
router.put("/editfournisseur/:id",editfournisseur);


module.exports= router;