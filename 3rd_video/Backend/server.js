/*
Notes:
1. use json formatter to study the json files to read them properly
*/

import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("server is ready");
});

app.get('/api/jokes' , (req,res)=>{
    const jokes = [
        {
            id : 1,
            title : 'one joke',
            content : 'this is first joke'
        },
        {   
            id : 2,
            title : 'two joke',
            content : 'this is second joke'
        }
    ];

    res.send(jokes);

})



app.listen(port , ()=>{
    console.log(`server is running at port ${port}`);
})