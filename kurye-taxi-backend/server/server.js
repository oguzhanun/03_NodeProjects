const express = require('express');
const path = require("path");
const hbs = require("hbs");
const router = require("./router");


const app = express();
const publicDirectory = path.join(__dirname, "../public");

app.use(router);

app.use(express.static(publicDirectory));
app.set("view engine", "hbs");

const viewsPath = path.join(__dirname, "../templates/views");
app.set("views",viewsPath);

const partialsPath = path.join(__dirname, "../templates/partials");
hbs.registerPartials(partialsPath);


const port = 8000;

app.listen(port, ()=>{
    console.log(`The server is up and running on port ${port}`);
});