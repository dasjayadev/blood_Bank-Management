let jwt = require("jsonwebtoken");
let authorizeUser = (req, res, next) => {
  try {
    let token = req.headers.authorization;
    if (!token)
      return res.status(401).send({ message: "User is not authorize" });
    jwt.verify(token, process.env.SECURE_KEY, (err, decode) => {
      if (err)
        return res.status(401).send({ message: "User is not authorize" });
      req.userId = decode.userId;
      next();
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Somthing wrong", success: false, error });
  }
};
module.exports = authorizeUser;
