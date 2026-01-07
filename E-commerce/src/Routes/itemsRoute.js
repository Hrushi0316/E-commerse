const express = require("express");
const routees = express.Router();
const {fetchingItems,createItems}= require("../Controlers/itemsControlers");
const {vendorMiddleware} = require("../Middlewares/vendorMid")


routees.get("/items",fetchingItems);
routees.post("/create",vendorMiddleware,createItems);

module.exports = routees;