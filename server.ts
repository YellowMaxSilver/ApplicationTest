// import express from 'express';
// import path from 'path';a
// import { fileURLToPath } from 'url';


const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname,'public')));

// app.get('/',(req,res)=>{
//     res.send("Hello World");
// });

app.listen(port, ()=>{
    console.log(`server runnig in the port ${port}`);
});