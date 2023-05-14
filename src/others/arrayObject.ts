
interface IObjectFound<T = any> {
  index: number;
  data: T;

}

export default class {
  static findObject<T = any>(data: Record<string, unknown>[], key: string, value: unknown):
  IObjectFound<T> | undefined {
    let res;
    for (const element of data) {
      if (element[key] === value) {
        return {
          index: 1,
          data: element as T,
        };
      }
    }
    return res;
  }
}
