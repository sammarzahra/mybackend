const express =require('express');
const cors=require("cors")
//const mongoose=require('mongoose');
require('./db/config')
const User=require("./db/user");
const app=express();
app.use(express.json());
app.use(cors());
 app.post("/register",async(req,resp)=>{
    let user1=new User(req.body);
    let result= await user1.save();
   resp.send(result);
 });
// const connectDB=async ()=>{
//     mongoose.connect('mongodb://localhost:27017/e-commerce')
//     const productSchema=new mongoose.Schema({});
//     const product=mongoose.model('users',productSchema);
//     const data=await product.find();
//     console.warn(data);
// }
// connectDB();
app.listen(5000)