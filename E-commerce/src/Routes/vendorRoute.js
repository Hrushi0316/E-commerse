const express = require("express");
const routes = express.Router();
const {loginVendor,registerVendor,logoutVendor} = require("../Controlers/vendorControlers");
const {vendorMid} = require("../Middlewares/vendorMid")

routes.post('/login',loginVendor);
routes.post('/register',registerVendor);
routes.get('/logout',logoutVendor);

module.exports = routes;