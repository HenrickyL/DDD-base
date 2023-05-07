import { UnauthorizedException } from "@core/Exceptions"

export class UnallowedError extends UnauthorizedException {
    constructor() {
      super(`the user does not have permission for this action.`)
      this.name = 'UnallowedError'
    }
  }