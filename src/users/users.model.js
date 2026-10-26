import mongoose, { Types } from "mongoose";


const usersSchema= new mongoose.Schema({
   
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:"String",
        enum:["admin","user"],
        default:"user"
    }

})

export const Users = mongoose.model("users",usersSchema)