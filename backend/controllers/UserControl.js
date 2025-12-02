import UserModel from "../models/UserModel.js"

export default {

    async CreateUser(req,res){

        const {nome,email,senha,data_nascimento,genero} = req.body

        const consulta = await UserModel.createUser({nome,email,senha,data_nascimento,genero})

        return res.status(201).json(consulta)

        
         
    }
}
