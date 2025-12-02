import { Router } from "express";
import UserControl from "../controllers/UserControl.js";

const rotasUser = Router()


rotasUser.post("/user",UserControl.CreateUser)
rotasUser.post("/user/login",UserControl.loginUser)
rotasUser.patch("/user/profile",UserControl.updateProfile)
rotasUser.delete("/user",UserControl.deleteUser)
// rotasUser.post("/createInfo")

export default rotasUser