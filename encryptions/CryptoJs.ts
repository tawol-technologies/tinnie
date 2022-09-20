import crypto from 'crypto-js';

const defaultIv = '3333288889248111';
export default class CryptoJs {
  static encrypt(payload: any, key: string, iv = defaultIv) {
    return crypto.AES.encrypt(JSON.stringify(payload), key, {
      iv: crypto.enc.Hex.parse(iv),
    }).toString();
  }

  static decrypt(payload: string, key: string, iv = defaultIv) {
    const bytes = crypto.AES.decrypt(payload, key, {
      iv: crypto.enc.Hex.parse(iv),
    });
    return JSON.parse(bytes.toString(crypto.enc.Utf8));
  }
}
