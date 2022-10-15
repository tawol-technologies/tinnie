
export default class {
  static buildRegex(arg: string) {
    let res = '';
    for (const char of arg) {
      switch (char) {
        case '/':
          res += '\\/';
          break;
        case '*':
          res += '.*';
          break;
        default:
          res += char;
          break;
      }
    }
    return new RegExp(res, 'gi');
  }

  static urlMatch(arg1: string, arg2: string) {
    return (arg1.toLowerCase()) === (arg1.match(this.buildRegex(arg2))?.toString().toLowerCase());
  }

  static isUrlMatch(bank: string[], path: string) {
    let res = false;
    bank.forEach((p) => {
      if (this.urlMatch(path, p)) {
        res = true;
      }
    });
    return res;
  }

  static maskCard(last4: number) {
    return '**** **** **** ' + last4;
  }
}
