const express=require('express');
const router=express.Router();
const {addcommande,affichercommande,deletecommande}=require ('../controllers/commande')

router.get("/affichercommande",affichercommande);
router.post("/addcommande",addcommande);
router.delete("/deletecommande/:id",deletecommande);

module.exports= router;