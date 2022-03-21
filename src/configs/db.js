// password: 8ZzpJirjMscgMjtX

const mongoose= require("mongoose");
module.exports=()=>{
    return mongoose.connect("mongodb+srv://Raj_mohan:8ZzpJirjMscgMjtX@cluster0.llssm.mongodb.net/eval_c3?retryWrites=true&w=majority");
};
