const express=require("express")

const app= express();

app.use(express.json());
app.use("./controllers/user.controllers")


module.exports=app;