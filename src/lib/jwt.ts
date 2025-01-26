import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export function generateJWT(user: any) {
  return jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });
}