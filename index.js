const { constants } = require("buffer")
const express = require("express")
const path = require("path")
const app = express()
const caminhoBase = path.join(__dirname, "templates")

app.get('/usuarios/:id', (requisicao, resposta) => {
    const id = requisicao.params.id
    console.log(`acessando dados do usuario: ${id}`)
    resposta.sendFile(`${caminhoBase}/usuarios.html`)
})
app.get('/', (requisicao, resposta) => {
    resposta.sendFile(`${caminhoBase}/index.html`)

})
app.listen(3000, () => {
    console.log("servidor rodando na porta 3000!")
})
