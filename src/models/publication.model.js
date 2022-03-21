const mongoose= require("mongoose")

const publicSchema= new mongoose.Schema({
  name:{type:String, required: true},

},
{
    timestamps:true
});

// name ( references post collection)
// timestamps (string, required)