import rnkModel from "../models/rankModel.js";

export default {
    async getRank(req, res) {
        try {
            const rankList = await rnkModel.getRankList();
            return res.status(200).json(rankList);
        } catch (error) {
            return res.status(500).json({ message: "Erro ao obter o ranking", error: error.message });
        }
    },

    async patchRank(req, res) {
        try {
            const { id_usuario, pontos } = req.body;

            const updatedRank = await rnkModel.updateRank({ id_usuario, pontos });

            return res.status(200).json(updatedRank);
        } catch (error) {
            return res.status(500).json({ message: "Erro ao atualizar o ranking", error: error.message });
        }
    },

    async createRank(req, res) {
        try {
            const { id_usuario, pontos } = req.body;

            const newRank = await rnkModel.createRank({ id_usuario, pontos });

            return res.status(201).json(newRank);
        } catch (error) {
            return res.status(500).json({ message: "Erro ao criar o ranking", error: error.message });
        }
    },

    async getUserRank(req, res) {
        try {
            const { id_usuario } = req.params;

            const userRank = await rnkModel.getUserRank(id_usuario);

            if (!userRank) {
                return res.status(404).json({ message: "Ranking do usuário não encontrado" });
            }

            return res.status(200).json(userRank);
        } catch (error) {
            return res.status(500).json({ message: "Erro ao obter o ranking do usuário", error: error.message });
        }
    },

    async deleteRank(req, res) {
        try {
            const { id_usuario } = req.params;

            const deletedRank = await rnkModel.deleteRank(id_usuario);

            if (!deletedRank) {
                return res.status(404).json({ message: "Ranking do usuário não encontrado" });
            }

            return res.status(200).json({ message: "Ranking do usuário deletado com sucesso" });
        } catch (error) {
            return res.status(500).json({ message: "Erro ao deletar o ranking do usuário", error: error.message });
        }
    }
};