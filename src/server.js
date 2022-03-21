const app=require("./index");

const connect=require("./configs/db");

app.listen(4500, async function(){
    try{
        await connect();
        console.log("listening to port 4500");
    }
    catch(err){
        console.log("something is wrong "+err)
    }
})