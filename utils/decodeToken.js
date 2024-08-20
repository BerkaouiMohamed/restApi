const jwt = require("jsonwebtoken");

module.exports = (token) => {
if(!token){
    throw new Error('no token')
}
token = token.split(" ")[1].trim();
var decoded;
jwt.verify(token, process.env.JWT_KEY, (err, decode) => {
  if (err) throw new Error("token is not valid");
  decoded = decode;
});
return decoded;
};
