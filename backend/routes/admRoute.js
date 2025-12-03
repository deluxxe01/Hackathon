import {Router} from 'express';
import admControl from '../controllers/admControl.js';

const admRoutes = Router();
admRoutes.post('/adm', admControl.CreateAdm);
admRoutes.post('/adm/login', admControl.loginAdm);
admRoutes.delete('/adm', admControl.deleteAdm);

export default admRoutes;