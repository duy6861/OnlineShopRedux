const express = require("express")
const cors = require("cors")

const app = express()
const product = require('./product')
app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
  res.send("Welcome to our online shop Api")
})
app.get("/product", (req, res) => {
  res.send(product)
})

const port = process.env.POST || 5000
app.listen(port, console.log(`running on post ${port}`))