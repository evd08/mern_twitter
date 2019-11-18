
if (process.env.NODE_ENV === "production") {
  module.exports = require("./keys_prod");
} else {
  module.exports = require("./keys_dev");
}

module.exports = {
  mongoURI:
    // "mongodb://dev:yt3Ana1VFETdMbTF@cluster.mongodb.net/test?retryWrites=true&w=majority" ,
    "mongodb+srv://dev:yt3Ana1VFETdMbTF@cluster0-mdqrv.mongodb.net/test?retryWrites=true&w=majority",
  secretOrKey: "secret10082017"
  //Make sure this is your own unique string
};