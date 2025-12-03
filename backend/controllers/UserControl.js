import UserModel from "../models/UserModel.js";
import bcrypt from "bcrypt";
import MedidasModel from "../models/MedidasModel.js";
import jwt from "jsonwebtoken";

export default {
  async CreateUser(req, res) {
    const { nome, email, senha, data_nascimento, genero } = req.body;

    const salt = bcrypt.genSaltSync(10);

    const hashedPassword = bcrypt.hashSync(senha, salt);

    const consulta = await UserModel.createUser({
      nome,
      email,
      hashedPassword,
      data_nascimento,
      genero,
    });

        const token = genToken({ id: consulta.id, email: consulta.email });

    return res.status(201).json({ user: consulta, token });
  },

  async loginUser(req, res) {
    const { email, senha } = req.body;

    const user = await UserModel.getUserByEmail(email);

    if (!user) {
      return res.status(404).json({ message: "Usuario não encontrado" });

      //
    }

        if (!user) {
            return res.status(404).json({ message: "Usuario não encontrado" });

            
        }

        console.log("dados: ",email)
        console.log("senha: ",senha)
       
        const isPasswordValid = bcrypt.compareSync(senha, user.senha);
        

        if (!isPasswordValid) {
            return res.status(401).json({ message: "Senha incorreta" });
        }

        const token = genToken({ id: user.id, email: user.email });

        return res.status(200).json(user);
    },

    async updateProfile(req, res) {

        const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({ message: "Sem token de autorização" });
    }

    const token = authHeader.split(" ")[1];

    try {
      const decoded = jwt.verify(token, secretKey);

      const updateFields = req.body;

      const updatedUser = await UserModel.updateProfile(
        decoded.email,
        updateFields
      );

      return res.status(200).json(updatedUser);
    } catch (err) {
      return res.status(401).json({ message: "Token invalido" });
    }
  },
  async deleteUser(req, res) {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ message: "Sem token de autorização" });
    }
    const token = authHeader.split(" ")[1];
    try {
        const decoded = jwt.verify(token, secretKey);
        const deletedUser = await UserModel.deleteUser(decoded.email);
        if (!deletedUser) {
            return res.status(404).json({ message: "Usuário não encontrado" });
        }
        return res.status(200).json(deletedUser);
    }
    catch (err) {
        return res.status(401).json({ message: "Token inválido" });
    }
},
  async getProfile(req, res) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({ message: "Sem token de autorizacao" });
    }

    const token = authHeader.split(" ")[1];

    try {
      const decoded = jwt.verify(token, secretKey);

      const user = await UserModel.getUserByEmail(decoded.email);

            return res.status(200).json(updatedUser);

        } catch (err) {
            return res.status(401).json({ message: "Token invalido" });
        }
    },

    async getProfile(req, res) {
    
        try {
            
            const user = await UserModel.getUserByEmail(decoded.email);

            if (!user) {
                return res.status(404).json({ message: "Usuario não encontrado" });
            }

            return res.status(200).json({ id: user.id, nome: user.nome, email: user.email, data_nascimento: user.data_nascimento, genero: user.genero, nivel_atual: user.nivel_atual, xp_total: user.xp_total, xp_mensal: user.xp_mensal });

        } catch (err) {
            return res.status(401).json({ message: "Token invalido" });
        }
    },
     async createInfo(req,res){

        const {peso,altura,largura_abdomen,id_usuario} = req.body

        const consulta = await MedidasModel.CreateInfos({id_usuario,peso,altura,largura_abdomen})

        return res.status(201).json(consulta)

    
     },
     async updateMedidas(req,res){

        const {peso,altura,largura_abdomen} = req.body

        const id_usuario = req.params.id

        const consulta = await MedidasModel.updateMedidas({id_usuario,altura,peso,largura_abdomen})

        return res.status(200).json(consulta)

     },
     async getMedidas(req,res){

        const id = req.params.id

        const consulta = await MedidasModel.getInfos(id)

        return res.status(200).json(consulta)
    },
    async obtainXp(req,res){

        const {xp} = req.body

        const id = req.params.id

        const consulta = await UserModel.getXp({xp,id})

        return res.status(200).json(consulta)

    }
}
