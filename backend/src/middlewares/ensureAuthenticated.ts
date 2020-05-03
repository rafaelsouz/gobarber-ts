import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import authConfig from '../config/auth';

interface TokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export default function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new Error('JWT Token is missing!');
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = verify(token, authConfig.jwt.secret);

    // Forçando a variavel decoded ser do tipo TokenPayload
    const { sub } = decoded as TokenPayload;

    req.user = {
      id: sub,
    };
  } catch {
    throw new Error('Invalid JWT Token');
  }

  return next();
}
