import express from "express"
import rotasUser from "../routes/userRoute.js"
import admRoutes from "../routes/admRoute.js"
import missionsRoutes from "../routes/missionsRoute.js"
import genJwt from "../util/jwtRoute.js"
//import historicoMissaoRoutes from "../routes/historicoMissaoRoute.js"

const App = express()

App.use(express.json())
App.use(cors({
    origin: "http://localhost:5173"
  }));

App.use(rotasUser, admRoutes, missionsRoutes, genJwt)

App.listen(3000,()=>{

    console.log("rodando na porta 3000")
})