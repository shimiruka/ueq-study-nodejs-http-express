const port = 3001;

// expressでWebサーバーを実装
import express from "express"
const app = express()

app.get("/", (req, res) => {
  res.send("Hello World")
})

app.get("/hello", (req, res) => {
    res.json({ message: "hello" })
})

app.use(express.static("public"));

app.listen(port)
