const express=require("express");
const app= express();
require("dotenv").config();
const products_route= require("./routes/products");
const connDb=require("./db/conn");

const PORT=process.env.PORT || 3001;

//middle ware to set router
app.use("/api/products",products_route);


app.get("/",(req,res)=>{
   res.send("hello form server")
});

const start= async ()=>{
    try{
       await connDb();
        app.listen(PORT, ()=>{
            console.log(`listening from server ${PORT}`);
        })
    }
    catch(err){
        console.log(err);
    }
}

start();