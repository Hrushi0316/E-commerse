const jwt = require("jsonwebtoken");
const userModel = require("../Schemas/userSchema")

async function authUserMiddleware(req, res, next) {
  try {
    const token = req.cookies.token;   // token coming from browser cookies

    if (!token) {
      return res.status(401).json({ Message: "User needs to login first" });
    }

    // verify token
    const decoded = jwt.verify(token, "sshhh");

    // attach user id to request
    req.user = { id: decoded.id };

    next();

  } catch (error) {
    console.log("AUTH ERROR:", error);
    return res.status(401).json({ Message: "Invalid or expired token" });
  }
}

module.exports = authUserMiddleware;
