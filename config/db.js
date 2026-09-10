import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
const DB_URL=process.env.DBURL;
let db;
export async function connectDB()
{
    if(!db)
    {
        db=await mongoose.connect(DB_URL);
    }
    return db;
}