import { InvalidUsernameLengthError } from "@modules/user/errors";

export abstract class Username{
  private static validate(name: string): boolean {
    return !name || name.trim().length > 2
  }
  static create(name: string): string {
    if (!this.validate(name)) {
      throw new InvalidUsernameLengthError(name);
    }
    return this.format(name);
  }

  static format(username:string):string{
    return username.toLocaleLowerCase()
  }
}