import { Router } from 'express';
import UserControl from '../controllers/UserControl.js';

const genJwt = Router();

genJwt.post('/generate-token', UserCgontrol.createToken);

export default genJwt;
