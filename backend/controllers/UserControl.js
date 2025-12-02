import UserModel from "../models/UserModel.js";
import bcrypt from "bcryptjs";
import genToken from "../routes/jwtRoute.js";

export default {
    async CreateUser(req, res) {
        const { nome, email, senha, data_nascimento, genero } = req.body;
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(senha, salt);

        const consulta = await UserModel.createUser({ nome, email, hashedPassword, data_nascimento, genero });

        const token = genToken({ id: consulta.id, email: consulta.email });

        return res.status(201).json({ user: consulta, token });
    },

    async loginUser(req, res) {
        const { email, senha } = req.body;

        const user = await UserModel.getUserByEmail(email);

        if (!user) {
            return res.status(404).json({ message: "Usuario não encontrado" });
        }

        const isPasswordValid = bcrypt.compareSync(senha, user.hashedPassword);

        if (!isPasswordValid) {
            return res.status(401).json({ message: "Senha incorreta" });
        }

        const token = genToken({ id: user.id, email: user.email });

        return res.status(200).json({ user, token });
    },

    async getProfile(req, res) {
        const authHeader = req.headers.authorization;

        if (!authHeader) {
            return res.status(401).json({ message: "Sem token de autorizacao" });
        }

        const token = authHeader.split(" ")[1];

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            const user = await UserModel.getUserByEmail(decoded.email);

            if (!user) {
                return res.status(404).json({ message: "Usuario não encontrado" });
            }

            return res.status(200).json({ id: user.id, nome: user.nome, email: user.email, data_nascimento: user.data_nascimento, genero: user.genero, nivel_atual: user.nivel_atual, xp_total: user.xp_total, xp_mensal: user.xp_mensal });

        } catch (err) {
            return res.status(401).json({ message: "Token invalido" });
        }
    },
}
