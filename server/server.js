import express from "express";
import data from './data.js';

const app = express();

app.get('/api/v1/products', (req,res)=>{
    res.send(data.products)
})

const port = process.env.PORT || 5000
app.listen(port, (err)=>{
    if(err) console.log("Error in server setup")
    console.log(`Server listening on http://localhost:${port}`);
})