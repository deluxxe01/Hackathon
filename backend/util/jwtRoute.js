import jwt from 'jsonwebtoken';
import express from 'express';
import cryto from 'crypto';

const genToken = express.Router();

genToken.post('/generate-token', (req, res) => {
  const { payload } = req.body;
  const secretKey = cryto.randomBytes(64).toString('hex');
  const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });
  return res.json({ token, secretKey });
});

export default genToken;