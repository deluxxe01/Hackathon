<<<<<<< HEAD
import { Router } from 'express';
import UserControl from '../controllers/UserControl.js';

const genJwt = Router();

genJwt.post('/generate-token', UserControl.createToken);

export default genJwt;
=======
import jwt from 'jsonwebtoken';
import { Router } from 'express';
import cryto from 'crypto';

const getToken = Router();

getToken.post('/generate-token', (req, res) => {
  const { payload } = req.body;
  const secretKey = cryto.randomBytes(64).toString('hex');
  console.log('LOG DO TOKEN',token)
  const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });
  return res.json({ token, secretKey });
});

export default getToken;
>>>>>>> 989f098f9a59eca0b05adfa494d9b5a5713c101e
