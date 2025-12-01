import express from "express"
import rotas from "../routes/routes.js"
const App = express()

App.use(express.json())

App.use(rotas)

App.listen(3000,()=>{

    console.log("rodando na porta 3000")
})