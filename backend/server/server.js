import express from "express"

const App = express()

App.use(express.json())


App.listen(3000,()=>{
    console.log("rodando na porta 3000")

})