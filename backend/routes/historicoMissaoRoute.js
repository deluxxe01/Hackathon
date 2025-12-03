import {router} from 'express';
import historicoMissaoControl from '../controllers/historicoMissaoControl.js';

const historicoMissaoRoutes = router();

historicoMissaoRoutes.post('/historicoMissao', historicoMissaoControl.createHistoricoMissao);

export default historicoMissaoRoutes;