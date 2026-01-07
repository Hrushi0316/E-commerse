const userModel = require("../Schemas/userSchema");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

const logoutUser = async (req,res)=>{
    res.cookie("token","");
    res.status(202).json({Message:"User has been logged out .."})

};

const registerUser = async function (req, res) {
  try {
    const { name, password, email } = req.body;

    // Check if user exists
    const isMatch = await userModel.findOne({ email });

    if (isMatch) {
      return res.status(409).json({ Message: "User already exists" });
    }

    // Hash password
    const hashPassword = await bcrypt.hash(password, 10);

    // Create user
    const newUser = await userModel.create({
      name,
      email,
      password: hashPassword
    });

    // Generate token
    const token = jwt.sign(
      { id: newUser._id },
      process.env.JWT_SECRET || "sshhh",
      { expiresIn: "7d" }
    );

    // Set cookie
    res.cookie("token", token, {
    httpOnly: true,
    secure: false,        // true if HTTPS
    sameSite: "lax",      // or "none" if strict cross-domain
    path: "/",            // important!
});
    return res.status(201).json({ Message: "User has been registered successfully" });

  } catch (err) {
    return res.status(500).json({ Message: "Something went wrong", error: err });
  }
};


const loginUser= async function(req,res){
    try{

        const {email,password} = req.body;
    
        const isFound = await userModel.findOne({email});
    
        if(!isFound){
            return res.status(401).json({Message:"Invalid E-mail or Password..."});
        }
    
        const compare = await bcrypt.compare(password,isFound.password);
    
        if(!compare){
            return res.status(404).json({Message:"Invalid E-mail or Password..."});
        }
    
        const token = jwt.sign({id:isFound._id},"sshhh");
    
res.cookie("token", token, {
  httpOnly: true,
  secure: false,        // true if HTTPS
  sameSite: "lax",      // or "none" if strict cross-domain
  path: "/",            // important!
});        return res.status(201).json({Message:`User with ${email} has been sucessfully loged in..`})
    }catch(err){
        res.status(400).json({Message:"Something went Wrong..",error:err})
    }

};

async function cartFunction(req, res) {
  try {
    const userId = req.user.id;      // user coming from JWT middleware
    const { productId } = req.body;  // product id from frontend

    // 1. Find user
    const user = await userModel.findById(userId);

    if (!user) {
      return res.status(404).json({ Message: "User not found" });
    }

    // 2. Check if product already exists in cart
    const existingItem = user.cart.find(
      (item) => item.productId.toString() === productId
    );

    if (existingItem) {
      // If exists, increase quantity
      existingItem.quantity += 1;
    } else {
      // If not, push new item
      user.cart.push({
        productId,
        quantity: 1
      });
    }

    // 3. Save user cart
    await user.save();

    return res.status(200).json({ Message: "Cart updated", cart: user.cart });

  } catch (error) {
    console.log(error);
    return res.status(500).json({ Message: "Internal Server Error", error });
  }
}


module.exports = {loginUser,registerUser,logoutUser,cartFunction}