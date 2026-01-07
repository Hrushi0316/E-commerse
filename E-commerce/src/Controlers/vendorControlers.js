const vendorModel = require("../Schemas/vendorSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function registerVendor(req, res) {
  try {
    const { email, password, address, phoneNo,companyName } = req.body;

    // 1. Check if vendor already exists
    const existingVendor = await vendorModel.findOne({ email });

    if (existingVendor) {
      return res.status(409).json({ Message: "Vendor already exists" });
    }

    // 2. Hash the password (VERY IMPORTANT)
    const hashPassword = await bcrypt.hash(password, 10);

    // 3. Create vendor
    const newVendor = await vendorModel.create({
      email,
      password: hashPassword,
      address,
      phoneNo,
      companyName
    });

    // 4. Create token using vendor's ID
    const token = jwt.sign(
      { id: newVendor._id},
      'sshhhh',
      { expiresIn: "7d" }
    );

    // 5. Set token in cookie
    res.cookie("vendorToken", token, {
      httpOnly: true,
      secure: false,
      maxAge: 7 * 24 * 60 * 60 * 1000
    });

    return res
      .status(201)
      .json({ Message: "Vendor registered successfully" });

  } catch (error) {
    return res.status(500).json({
      Message: "Internal Server Error",
      error: error.message,
    });
  }
}


async function loginVendor(req, res) {
  try {
    const { email, password } = req.body;

    const vendor = await vendorModel.findOne({ email });

    if (!vendor) {
      return res.status(401).json({ Message: "Invalid email or password.." });
    }

    const comparing = await bcrypt.compare(password, vendor.password);

    if (!comparing) {
      return res.status(401).json({ Message: "Invalid email or password.." });
    }

    const token = jwt.sign(
      { id: vendor._id },
      "sshhhh",
      { expiresIn: "7d" }
    );

    res.cookie("vendorToken", token, {     // 👈 FIXED COOKIE NAME
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      path: "/"
    });

    return res.status(200).json({ Message: "Vendor Login Successfully.." });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ Message: "Something went wrong", error: err.message });
  }
}


async function logoutVendor(req,res){
    res.cookie("vendorToken","");
    res.status(202).json({Message:`Vendor has been logged out`});
}

module.exports = {loginVendor,registerVendor,logoutVendor};