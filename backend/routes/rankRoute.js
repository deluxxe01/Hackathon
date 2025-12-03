import {router} from 'express';
import rankControl from '../controllers/rankControl';

const rankRoutes = router();

rankRoutes.get('/rank', rankControl.getRankings);
rankRoutes.get('/rank/user/:id', rankControl.getUserRank);
rankRoutes.patch('/rank/user/:id', rankControl.updateUserRank);
rankRoutes.post('/rank/user', rankControl.createUserRank);

export default rankRoutes;