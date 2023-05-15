export default class Base64 {
    static encode(data: any) {
        return Buffer.from(data).toString("base64")
    }

    static decode(encrypted: any) {
        const buff = Buffer.from(encrypted, "base64");
        return buff.toString();
    }
}