import { HttpResponse } from "@core/domain/HttpResponses";

export interface Middleware<T = any, U = any> {
  handle: (httpRequest: T, httpBody?: U) => HttpResponse<T>

}
