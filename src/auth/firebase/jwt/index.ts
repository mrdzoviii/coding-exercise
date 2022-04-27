import jwt_decode from 'jwt-decode';

export interface IDecodedToken {
  aud: string;
  auth_time: number;
  email: string;
  email_verified: false;
  exp: number;
  firebase: {
    identities: {
      [key: string]: unknown;
    };
    sign_in_provider: string;
    sign_in_second_factor?: string;
    second_factor_identifier?: string;
    tenant?: string;
    [key: string]: unknown;
  };
  iat: number;
  iss: string;
  name: string;
  sub: string;
  user_id: string;
}

export const decodeFirebaseJwt = (jwt: string): IDecodedToken => {
  const decodedToken: IDecodedToken = jwt_decode(jwt);
  return decodedToken;
};
