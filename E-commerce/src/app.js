const express = require('express');
const app = express();
const route = require("./Routes/userRoute");
const routes =require("./Routes/vendorRoute");
const routees = require("./Routes/itemsRoute");
const cors = require('cors');
const { parse } = require('dotenv');
const cookieParser = require('cookie-parser');
const itmeModel = require("./Schemas/itemsSchema");
const userModel = require("./Schemas/userSchema");
const authUserMiddleware =require("../src/Middlewares/userMid")
//middlewares....

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}));
app.use(cookieParser());

app.use('/user',route);
app.use('/vendor',routes);

app.use('/all',routees);

app.get('/api/mobiles', async (req, res) => {
  const result = await itmeModel.find({category:'mobiles'});
  res.send(result);
  console.log(result);
});
app.get('/api/fasion', async (req, res) => {
  const result = await itmeModel.find({category:'fasion'});
  res.send(result);
  console.log(result);
});

app.get("/cart", authUserMiddleware, async (req, res) => {
  try {
    const userId = req.user.id;  // 👈 user ID coming from JWT

    const result = await userModel
      .findById(userId)
      .populate("cart.productId");  // 👈 populate product details

    if (!result) {
      return res.status(404).json({ Message: "User not found" });
    }

    return res.status(200).json(result.cart); // send only cart
  } catch (error) {
    console.log(error);
    res.status(500).json({ Message: "Internal Server Error", error });
  }
});


module.exports= app;