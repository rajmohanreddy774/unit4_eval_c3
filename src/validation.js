module.exports={
    required:(fieldName,value,args)=>
    {
        if(value?.trim().length>0)
        {
            return[true,null];
        }
        return [false, `${fielName} is required`];
    },

    matchLength:(fieldName, value, args)=>
    {
        const length= args[1];
        const unit= args[2];
        if(value?.trim().length==length)
        {
            return [true, null];
        }
        return [false, `${fieldName} should of same ${length} ${unit}`]
    },

    email:(fielName,email,args)=> {
        if(/^w+[\.-]?\w+)*@\w+(\.-]?\w+)*(\.\w(2,3})+$/.test(email))
        {
            return [true,null];
        }
        return [false, "please fill valid email"];    }


},

function validunitCheck(fieldName,value,unit)
{
    if(unit=="digits")
    {
        return validCheck(fieldName,value, unit);
    }
}


function validDigitCheck(fieldName,value,unit)
{
    if(/^[0-9]*$/.test(value))
    {
        return [true,null];

    }
    else{
        return [false, `${fieldName} should have only ${unit}`];
    }
}
