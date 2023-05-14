import bcrypt from 'bcrypt';

export default class {
  static async encrypt(arg: any): Promise<string> {
    return bcrypt.hash(arg, bcrypt.genSaltSync(Math.random()));
  }

  static encryptSync(arg: any): string {
    return bcrypt.hashSync(arg, bcrypt.genSaltSync(Math.random()));
  }

  static isMatch(plain: any, encrypted: any): boolean {
    return bcrypt.compareSync(plain, encrypted);
  }
}
