import { APIRequestContext, APIResponse} from "playwright"
import {GlobalConfig, GlobalAPIResponseVariables, JsonPayloadName} from "../env/global";
import {retrieveHostURL} from "./host-helper";
import {payloadExists} from "./payload-helper";

export const getResponse = async (
    request: APIRequestContext,
    route: string,
    globalConfig: GlobalConfig,
    globalAPIResponseVariables: GlobalAPIResponseVariables
): Promise<APIResponse> => {

    const url = retrieveHostURL(globalConfig)

    const response = await request.get(url.href+route)

    globalAPIResponseVariables.response = response

    return response
}

export const deleteResponse = async (
    request: APIRequestContext,
    route: string,
    globalConfig: GlobalConfig,
    globalAPIResponseVariables: GlobalAPIResponseVariables
): Promise<APIResponse> => {

    const url = retrieveHostURL(globalConfig)

    const response = await request.delete(url.href+route)

    globalAPIResponseVariables.response = response

    return response
}

export const postResponse = async (
    request: APIRequestContext,
    route: string,
    jsonPayloadName: JsonPayloadName,
    globalConfig: GlobalConfig,
    globalAPIResponseVariables: GlobalAPIResponseVariables
): Promise<APIResponse> => {

    const url = retrieveHostURL(globalConfig)

    const payload = payloadExists(globalConfig.jsonPayloadMappings[jsonPayloadName])

    const response = await request.post(url.href+route, { data: payload})

    globalAPIResponseVariables.response = response

    return response
}

export const patchResponse = async (
    request: APIRequestContext,
    route: string,
    jsonPayloadName: JsonPayloadName,
    globalConfig: GlobalConfig,
    globalAPIResponseVariables: GlobalAPIResponseVariables
): Promise<APIResponse> => {

    const url = retrieveHostURL(globalConfig)

    const payload = payloadExists(globalConfig.jsonPayloadMappings[jsonPayloadName])

    const response = await request.patch(url.href+route, { data: payload})

    globalAPIResponseVariables.response = response

    return response
}

export const putResponse = async (
    request: APIRequestContext,
    route: string,
    jsonPayloadName: JsonPayloadName,
    globalConfig: GlobalConfig,
    globalAPIResponseVariables: GlobalAPIResponseVariables
): Promise<APIResponse> => {

    const url = retrieveHostURL(globalConfig)

    const payload = payloadExists(globalConfig.jsonPayloadMappings[jsonPayloadName])

    const response = await request.put(url.href+route, { data: payload})

    globalAPIResponseVariables.response = response

    return response
}
