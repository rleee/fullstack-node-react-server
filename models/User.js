const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// can also write like const { Schema } = mongoose

const userSchema = new Schema({
  googleId: String
});

mongoose.model("users", userSchema);
