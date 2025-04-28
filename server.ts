import express from 'express';
// import path from 'path';a
// import { fileURLToPath } from 'url';


// const express = require('express');
const path = require('path');

const app = express();
const port = 5000;

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname,'public')));

app.get('/:page',(req,res)=>{
    const query= req.url.split('?')[1]; 
    const a = req.query.a;
    const urlPath = req.params.page;   
    //console.log(queryValue);

    res.sendFile(path.join(__dirname,`/public/${urlPath}.html`),(err)=>{
        if(err){
        res.status(404).send("page not found? "+a);
        }
    });
    
    //console.log(urlPath);
    //res.send("Hello World");
});

app.get('/api/data',(req,res)=>{
    res.json({message:"Hello from backend"})
})




app.listen(port, ()=>{
    console.log(`server runnig in the port ${port}`);
});