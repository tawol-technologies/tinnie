
interface IObjectFound<T = any> {
  index: number;
  data: T

}

export default class {
  static findObject<T = any>(data: T[], key: string, value: unknown):
  IObjectFound<T> | undefined {
    let res;
    for (let i = 0; i < data.length; i++) {
      const element = data[i] as Record<string, unknown>;
      if (element[key] === value) {
        return {
          index: 1,
          data: (res = element) as T,
        };
      }
    }
    return res;
  }
}
