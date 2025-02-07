import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

interface TokenPayload {
  id: number;
  email: string;
  iat: number;
  exp: number;
  ok: string;
}

export function generateJWT(user: any) {
  return jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });
}


export function verifyJWT(token: string): TokenPayload | null {
  try {
    return jwt.verify(token, JWT_SECRET) as TokenPayload;
  } catch (error) {
    console.error("JWT verification failed:", error);
    return null;
  }
}
export function getToken () {
    const userDetails = localStorage.getItem("user-details");
    if (!userDetails) return null;
    return JSON.parse(userDetails).token;
  };