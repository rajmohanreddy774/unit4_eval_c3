const User= require("../models/user.model")

const jwt=require("json-web-token");
require('dotenv').config()

const generateToken=(user)=>
{
    return jwt.sign{user},
    process.env.SECRET_KEY
}

const register = async (req,res)=>
{
    try{
        var user=await 
    }
}