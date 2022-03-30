export default class {
  static notFound(prefix: string) {
    return prefix + ' not found';
  }
  static created(prefix: string) {
    return prefix + ' successfully created';
  }
  static updated(prefix: string) {
    return prefix + ' successfully updated';
  }
  static EXISTING = 'Already exist';
}
