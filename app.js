let express=require("express");
let app=express();

let router=require("./Router/router");
let bodyParser=require("body-parser");

app.use(bodyParser.json());
app.use(router);

app.listen(4000,()=>{
    console.log("Server started in port number 4000");
})