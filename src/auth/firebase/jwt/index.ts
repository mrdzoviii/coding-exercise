import jwt_decode from 'jwt-decode';
import { IDecodedToken } from '../../types';

export const decodeFirebaseJwt = (jwt: string): IDecodedToken => {
  const decodedToken: IDecodedToken = jwt_decode(jwt);
  return decodedToken;
};
