require("dotenv").config();
const connDB= require("./db/conn");

//gettig model form models
const Product = require("./models/product");

const ProductJson=require("./products.json");

const start=async()=>{
try{
await connDB(process.env.MONGODB_URL);
await Product.deleteMany();
await Product.create(ProductJson);
console.log("succes in db collection!");
}
catch(err){
    console.log(err);
}

}
start();