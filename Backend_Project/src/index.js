// require('dotenv').config({path:'./env'}); // this is also working code

import dotenv from "dotenv" // for using this we made changes in package.json in script section
import connectDB from "./db/index.js"

dotenv.config({
    path : './evn'
})


connectDB();
















// first approach to connect database
/*
import express from "express"
const app = express();
//we will use immediately invoke function for db connection(semicoln is imp)
;( async () =>{
    //always use async await and try catch while connecting and taking to databse
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error" , (error) =>{
            console.log("Error = " , error);
            throw error;
            //this is for if exprss app is not currently working with db
        })

        app.listen(process.env.PORT , ()=>{
            console.log(`app is listening on port ${process.env.PORT}`);
        })

    } catch (error) {
        console.log("error = " , error);
        throw error;
    }
})()
*/


// second approach is write code to connect to db in different file and import here and call the function from here to connect to db
