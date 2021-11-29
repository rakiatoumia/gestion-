const mongoose = require("mongoose");
const userSchema=  new mongoose.Schema(
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
        type:String, 
    },
    Sexe:{
        type:String, 
    },
    DateNaissance:{
        type:Date, 
    },   
})  
 module.exports= mongoose.model("Users",userSchema)
