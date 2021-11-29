const mongoose = require("mongoose");
const postSchema=  new mongoose.Schema(
    {
     owner:{
        type:mongoose.Types.ObjectId,
        ref:"Users",
     },
    Title:{
        type:String, 
    },
    Description:{
        type:String,
    },
    Image:{
        type:String,
    },    
})  

 module.exports= mongoose.model("posts",postSchema)
