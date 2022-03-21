const{validateInputs}=require("../utils/helper");

const validator=(validationRules)=>{
    return (req,res,next)=> {
        const [isValid,err]=validateInputs(validationRules,req,body);
        req.isValid=isValid;
        req.err=err;
        next();
    };
};
module.exports=validator;