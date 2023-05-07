import { BadRequestException } from "@core/Exceptions"

export class InvalidJWTTokenError extends BadRequestException {
    constructor() {
      super(`The JWT token is invalid.`)
      this.name = 'InvalidJWTTokenError'
    }
  }