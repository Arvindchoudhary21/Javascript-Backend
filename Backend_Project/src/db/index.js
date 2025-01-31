import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () =>{
    try {
       const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
       console.log(`\n mongodb connected !! DB Host = ${connectionInstance.connection.host}`); // to get the name of the host ki kaha databse connect hua hai
       
    } catch (error) {
        console.log("Mongodb connection error = " , error);
        process.exit(1);
        
    }
}

export default connectDB; 