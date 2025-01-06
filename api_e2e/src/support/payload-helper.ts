import { env } from "../env/parseEnv"

export const payloadExists = (jsonPayload: any): void => {
    if (jsonPayload === undefined) {
        throw Error(`🧨 JSON Payload not defined in ${env('JSON_PAYLOAD_PATH')} 🧨`)
    }
    return jsonPayload
}