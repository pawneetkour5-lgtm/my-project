import mongoose from "mongoose";

export const connectDb=async()=>{
    await mongoose.connect("mongodb+srv://kourpawneet_db_user:TTlg3l4HlsugFCMm@cluster0.fvqfojf.mongodb.net/db")
    console.log("DB CONNECTED");
}