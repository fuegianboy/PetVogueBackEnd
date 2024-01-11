const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.SECRET_KEY;

const isAuthenticated = (req, res, next) => {
  const authHeader = req.headers.authorization;
  
  if (!authHeader) {
    return res.status(403).json({ error: true, cause: "the authorization header is missing" });
  }

  const token = authHeader.split(' ')[1]; 

  jwt.verify(token, SECRET_KEY, (err, user) => {
    console.log(user, "response de jwt");
    if (err) {
      return res.status(401).json({ cause: "No authorizated" });
    }
    req.user = user; // Guarda el usuario en req.user en lugar de req.body.user
    next();
  });
};

module.exports = {
  isAuthenticated,
};
