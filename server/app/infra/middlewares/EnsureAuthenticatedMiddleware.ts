import { decode } from 'jsonwebtoken'
import { Middleware } from "@core/infra/Middleware";
import { AuthenticatedMiddlewareRequest } from "@core/domain/DTOs";
import { HttpResponse, ok } from "@core/domain/HttpResponses";
import { AuthenticatedUserSessionsData, AuthTokenPayload } from '@core/domain/DTOs/userDTO';
import { AccessDeniedError } from '@modules/user/errors/AuthenticateUserErrors';

export class EnsureAuthenticatedMiddleware<T> implements Middleware {
  handle(request: AuthenticatedMiddlewareRequest): HttpResponse{
    const { accessToken,authorization } = request
    if(authorization){
      const token = accessToken || authorization.split(' ')[1]
      if (token && token != 'undefined') {
          const decoded = decode(token) as AuthTokenPayload
          const [userId, username] = decoded.sub.split('@')
          return ok<AuthenticatedUserSessionsData>({
            inSessionUserId: userId,
            InSessionUsername: username,
            token
          })
      }
    }
    throw new AccessDeniedError();
  }
}