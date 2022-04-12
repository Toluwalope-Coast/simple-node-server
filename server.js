const express = require ('express')
const config = require('./config/main.config.json')
const connBuilder = require("./dao/connection-builder")
const app = express()

app.get('/', (req, res) => res.json({"matter": "hello world"}))
app.listen(config.port, ()=> console.log(`${config.serverName} is listening on post ${config.port}`))