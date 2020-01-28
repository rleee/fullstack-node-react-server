const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
require("./models/User");
require("./services/passport");

mongoose.connect(keys.mongoURI);

const app = express();
require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
// process.env.PORT will be used on heroku to determine which port will heroku use to run this app,
// and 5000 will be use when we're in development environment whereprocess.env is null
app.listen(PORT);
