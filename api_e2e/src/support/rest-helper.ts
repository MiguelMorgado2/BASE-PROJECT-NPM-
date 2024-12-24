import { APIRequestContext, APIResponse} from "playwright"
import { GlobalConfig, GlobalAPIResponseVariables} from "../env/global";
import {retrieveHostURL} from "./host-helper";

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