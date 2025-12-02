import { Router } from "express";
import UserControl from "../controllers/UserControl.js";

const rotasUser = Router()


rotasUser.post("/user",UserControl.CreateUser)

export default rotasUser