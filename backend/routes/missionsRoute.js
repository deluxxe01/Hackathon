import {Router} from 'express';
import missionsControl from '../controllers/missionsControl.js';

const missionsRoutes = Router();

missionsRoutes.post('/missions', missionsControl.createMission);
missionsRoutes.get('/missions/:id', missionsControl.getMissionById);
missionsRoutes.put('/missions/:id', missionsControl.updateMission);
missionsRoutes.delete('/missions/:id', missionsControl.deleteMission);

export default missionsRoutes;