const express= require("express");

const router =express.Router();

const User= require("../models/user.model");

const validator=require("../middleware/validators");


router.post("/",validator({
   
    first_name:{type:String, required: true, minlength:3, maxlength:30},
    last_name:{type:String, required: false, minlength:3, maxlength:30},
    age:{type:Number,required:true},
    email:{type:email, required:true, unique:true},
    profileimages:{type:Image, required:true},
}),
async(req,res)=>{
    const err= {};
    
})

module.exports= router;