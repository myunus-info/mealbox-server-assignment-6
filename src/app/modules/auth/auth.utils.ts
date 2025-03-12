import jwt, { JwtPayload, Secret } from 'jsonwebtoken';
import AppError from '../../errors/AppError';
import httpStatus from 'http-status';

export const generateToken = (
  jwtPayload: { userId: string; name: string; email: string; role: string },
  secret: Secret,
  expiresIn: string,
) => {
  return jwt.sign(jwtPayload, secret, { expiresIn });
};

export const verifyToken = (token: string, secret: string) => {
  try {
    return jwt.verify(token, secret) as JwtPayload;
  } catch (error) {
    throw new AppError(httpStatus.UNAUTHORIZED, 'Unauthorized access. Please log in!');
  }
};
