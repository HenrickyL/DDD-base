import { Middleware } from "@core/infra/Middleware"
import { EnsureAuthenticatedMiddleware } from "@infra/middlewares/EnsureAuthenticatedMiddleware"

export function makeEnsureAuthenticatedMiddleware(): Middleware {
  const ensureAuthenticatedMiddleware = new EnsureAuthenticatedMiddleware()
  return ensureAuthenticatedMiddleware
}
