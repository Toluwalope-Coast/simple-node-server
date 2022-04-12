const express = require ('express')

const app = express()
const port = 3000

app.get('/', (req, res) => res.json({"matter": "hello world"}))
app.listen(port, ()=> console.log(`Microservices is listening on post ${port}`))