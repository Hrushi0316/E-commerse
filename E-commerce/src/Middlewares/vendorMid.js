const jwt  = require("jsonwebtoken");
const vendorModel = require("../Schemas/vendorSchema");

async function vendorMiddleware(req, res, next) {
    try {
     const token = req.cookies.vendorToken;

        if (!token) {
            return res.status(400).json({ Message: "You need to login first..." });
        }

        const decode = jwt.verify(token, "sshhhh");

        const vendor = await vendorModel.findById(decode.id);

        if (!vendor) {
            return res.status(404).json({ Message: "Vendor not found..." });
        }

        req.vendor = vendor;

        next();
    } catch (err) {
        console.log(err);
        return res.status(500).json({ Message: "Invalid token or middleware error", error: err.message });
    }
}

module.exports = { vendorMiddleware };
