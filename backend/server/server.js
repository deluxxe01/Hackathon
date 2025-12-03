import express from "express"
import rotasUser from "../routes/userRoute.js"
import cors from "cors"
const App = express()

App.use(express.json())
App.use(cors({
    origin: "http://localhost:5173"
  }));

App.use(rotasUser)

App.listen(3000,()=>{

    console.log("rodando na porta 3000")
})