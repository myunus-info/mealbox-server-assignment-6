import { TUserRole } from '../user/user.interface';

export interface TLoginUser {
  email: string;
  password: string;
}

export interface IJwtPayload {
  userId: string;
  name: string;
  email: string;
  role: TUserRole;
}
