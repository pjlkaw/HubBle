import express from "express"
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()

//Permite acessar CSS, JS, Imagens, ícones
app.use(express.static(path.join(__dirname, "../public")))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"))
})

app.get('/pomodoro', (req, res) => {
  res.sendFile(path.join(__dirname, "../public/tools/pomodoro.html"))
})

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, "../public/tools/notes.html"))
})

app.listen(3000, (res, req) => {
    console.log("Rodando na porta 3000");
})