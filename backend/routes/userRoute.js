import { Router } from "express";
import UserControl from "../controllers/UserControl.js";

const rotasUser = Router()


rotasUser.post("/user",UserControl.CreateUser)
rotasUser.post("/user/login",UserControl.loginUser)
rotasUser.patch("/user/profile",UserControl.updateProfile)
rotasUser.delete("/user",UserControl.deleteUser)
rotasUser.post("/medidas/create",UserControl.createInfo)//rota para a criação de medidas
rotasUser.put("/medidas/update/:id",UserControl.updateMedidas)
rotasUser.get("/medidas/:id",UserControl.getMedidas)
rotasUser.put("/getXp/:id",UserControl.obtainXp)

export default rotasUser