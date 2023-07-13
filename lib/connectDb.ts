import mongoose from "mongoose";

let isConnected: boolean = false;

export default async function connectDb(mongoURI: string){
    try{
        mongoose.set('strictQuery',true);
        if(isConnected){
            console.log('Database is already connected');
            return;
        }
        if(!mongoURI)
            throw new Error("Cannot connect to the database. Please try again later.");
        const connect = await mongoose.connect(mongoURI,{
            dbName:"NextEmail",
        });
        console.log('Successfully connected to the database.');
        
    }catch(err){
        console.log(err);
    }
}