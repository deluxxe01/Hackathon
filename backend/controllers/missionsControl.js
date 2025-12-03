import MissionsModel from '../models/missionsModel.js';

export default {
    async createMission(req, res) {
        const { title, description, userId } = req.body;
        const newMission = await MissionsModel.createMission({ title, description, userId });
        return res.status(201).json(newMission);
    },

    async getMissionById(req, res) {
        const { id } = req.params;
        const mission = await MissionsModel.getMissionById(id);
        if (!mission) {
            return res.status(404).json({ message: "Missão não encontrada" });
        }
        return res.status(200).json(mission);
    },

    async updateMission(req, res) {
        const { id } = req.params;
        const { title, description } = req.body;
        const updatedMission = await MissionsModel.updateMission(id, { title, description });
        if (!updatedMission) {
            return res.status(404).json({ message: "Missão não encontrada" });
        }
        return res.status(200).json(updatedMission);
    },

    async deleteMission(req, res) {
        const { id } = req.params;
        const deleted = await MissionsModel.deleteMission(id);
        if (!deleted) {
            return res.status(404).json({ message: "Missão não encontrada" });
        }
        return res.status(204).send();
    },

};