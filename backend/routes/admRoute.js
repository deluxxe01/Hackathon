import {router} from 'express';
import admControl from '../controllers/admControl';

const admRoutes = router();
admRoutes.post('/adm', admControl.CreateAdm);
admRoutes.post('/adm/login', admControl.loginAdm);
admRoutes.delete('/adm', admControl.deleteAdm);

export default admRoutes;