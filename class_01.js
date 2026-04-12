// we are doing an smart work in the class

import mongoose from "mongoose";

async function dbconnection(){
    await mongoose.connect("mongodb://localhost:27017/school");const schema=mongoose.Schema({
        name:String,
        email:String,
        age:Number
    })
const 
}