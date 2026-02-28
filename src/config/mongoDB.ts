import dotenv from 'dotenv'
import mongoose from 'mongoose';

dotenv.config();

export async function connectDB(): Promise<void> {
    try{
        await mongoose.connect(process.env.MONGODB_URI as string, {
            dbName: 'spellbook'
        });
        console.log('MongoDB is now connected');
    }catch(err){
        console.error("MongoDB connection failed with the error: ", err);
        process.exit(1);
    }
}