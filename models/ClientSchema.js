const mongoose = require("mongoose");
const clientSchema=  new mongoose.Schema(
    {
        
     firstname:{
        type:String, 
    },
    lastname:{
        type:String, 
    },
     email:{
        type:String,
    }, 
    password:{
        type:String,
    },
    PhoneNumber:{
        type:Number, 
    },
    NomSociete:{
        type:String, 
    },
    Adresse:{
        type:String, 
    },
    CodePostal:{
        type:String, 
    },
    Ville:{
        type:String, 
    },
    MatriculeFiscale:
    {
        type:Number, 
    },
    NiveauFidelite:
    {
        type:Number, 
    },
    Fax:{
        type:Number, 
    },   
})  
 module.exports= mongoose.model("client",clientSchema)