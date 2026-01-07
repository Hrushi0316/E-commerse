const express = require('express');
const route = express.Router();

const { loginUser, logoutUser, registerUser, cartFunction } =
  require("../Controlers/userControlers");

const authUserMiddleware = require('../Middlewares/userMid');  // FIXED

route.get('/user/:id/:username', (req, res) => {
  const { id, username } = req.params;
  res.send(`Welcome to the user login page ${id}, ${username}.`);
});

route.post("/login", loginUser);
route.post("/register", registerUser);
route.get("/logout", logoutUser);

route.post("/cart", authUserMiddleware, cartFunction);  // NOW WORKS ✔️

module.exports = route;
