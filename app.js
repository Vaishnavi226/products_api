//? This file will have whole logic of app
const express = require("express");

const app = express(); // this will create a server instance called as app
app.use(express.json());

// all imported routes
const product_routes = require("./src/routes/product.routes");

// middlewares
app.use("/api/products", product_routes);

module.exports = app;
