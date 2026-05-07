const express = require('express')
const path = require("path")

const app = express()

//Permite acessar CSS, JS, Imagens, ícones
app.use(express.static(path.join(__dirname, "../public")))

app.get('/main', (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"))
})

app.listen(3000, (res, req) => {
    console.log("Rodando na porta 3000");
})