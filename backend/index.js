const express = require("express");
const app = express();

const port = 8080;

app.get("/register",(res,req)=>{
        res.send("standard GET response");

});

app.post("/register",(res,req)=>{
        res.send("standard Post response");

});

app.listen("port", ()=>{
    console.log("app is listening the code ");
});