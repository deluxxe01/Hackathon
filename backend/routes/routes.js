import { Router } from "express";

const rotas = Router()


rotas.get("/test",(req,res)=>{

    res.json("funfa")

})

export default rotas