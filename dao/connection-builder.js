const config = require("../config/main.config.json")
const mongoose = require("mongoose")
mongoose.set("debug", config.isDebugMode || false)

mongoose.connect(config.mongoUrl)
