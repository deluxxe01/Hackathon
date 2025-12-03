import admModel from '../models/admModel.js';
import bcrypt from 'bcrypt';
import genToken from '../util/jwtRoute.js';

export default {
    async CreateAdm(req, res) {
        const { nome, email, senha } = req.body;
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(senha, salt);

        const consulta = await admModel.createAdm({ nome, email, hashedPassword });

        const token = genToken({ id: consulta.id, email: consulta.email });

        return res.status(201).json({ adm: consulta, token });
    },

    async loginAdm(req, res) {

        const { email, senha } = req.body;

        const adm = await admModel.getAdmByEmail(email);
        

        if (!adm) {
            return res.status(404).json({ message: "Administrador não encontrado" });
        }

        const isPasswordValid = bcrypt.compareSync(senha, adm.hashedPassword);
        

        if (!isPasswordValid) {
            return res.status(401).json({ message: "Senha incorreta" });
        }

        const token = genToken({ id: adm.id, email: adm.email });

        return res.status(200).json({ adm, token });
    },

};