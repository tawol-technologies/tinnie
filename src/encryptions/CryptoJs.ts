import crypto from 'crypto-js';

const defaultIv = '3333288889248111';
const defaultKey = 'ttl-cry-default-key';
export default class CryptoJs {
  static encrypt(payload: any, key = defaultKey, iv = defaultIv) {
    if (typeof payload !== 'string') {
      payload = JSON.stringify(payload);
    }
    return crypto.AES.encrypt(payload, key, {
      iv: crypto.enc.Hex.parse(iv),
    }).toString();
  }

  static decrypt(encrypted: string, key = defaultKey, iv = defaultIv) {
    const decryptedPayload = crypto.AES.decrypt(encrypted, key, {
      iv: crypto.enc.Hex.parse(iv),
    }).toString(crypto.enc.Utf8);
    try {
      return JSON.parse(decryptedPayload);
    } catch (error) {
      return decryptedPayload;
    }
  }
}
