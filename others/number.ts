export default class {
  static randomize(length?: number): number {
    if (!length) {
      length = 4;
    }
    const digits = '0123456789';
    let res = '';
    for (let i = 0; i < length; i++) {
      const rnum = Math.floor(Math.random()*digits.length);
      res += digits[rnum];
    }
    return parseInt(res);
  }
}
