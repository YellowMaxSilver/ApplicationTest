"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import path from 'path';a
// import { fileURLToPath } from 'url';
// const express = require('express');
const path = require('path');
const app = (0, express_1.default)();
const port = 5000;
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
app.use(express_1.default.static(path.join(__dirname, 'public')));
app.get('/:page', (req, res) => {
    const query = req.url.split('?')[1];
    const a = req.query.a;
    const urlPath = req.params.page;
    //console.log(queryValue);
    res.sendFile(path.join(__dirname, `/public/${urlPath}.html`), (err) => {
        if (err) {
            res.status(404).send("page not found? " + a);
        }
    });
    //console.log(urlPath);
    //res.send("Hello World");
});
app.get('/api/data', (req, res) => {
    res.json({ message: "Hello from backend" });
});
app.listen(port, () => {
    console.log(`server runnig in the port ${port}`);
});
