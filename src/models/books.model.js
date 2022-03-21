const mongoose= require("mongoose")

const bookSchema= new mongoose.Schema({


    likes:{type:Number, default:0},
    coverImage:{type:Image, default:1},
    content:{type:String, required:true},
    userid:{type:String, required:true},

},
{
    timestamps:true
});


// likes (integer, minimum default is 0)
// coverImage (string, required and it can be 1 only)
// content ( string, required)
// timestamps (string, required)