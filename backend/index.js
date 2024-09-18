const express = require("express");
const mainRouter = require("./router/index")
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/vi', mainRouter)

console.log("serever running")

app.listen(3000)

