import express from "express"
import rotasUser from "../routes/userRoute.js"
const App = express()

App.use(express.json())

App.use(rotasUser)

App.listen(3000,()=>{

    console.log("rodando na porta 3000")
})