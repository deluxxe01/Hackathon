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