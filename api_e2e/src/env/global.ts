import {APIResponse} from "@playwright/test";

export type GlobalAPIResponseVariables = { [key:string]: APIResponse}
export type HostsConfig = Record<string, string>
export type JsonPayloadMappings = Record<string, string>
export type JsonPayloadName = string

export type GlobalConfig = {
    hostsConfig: HostsConfig
    jsonPayloadMappings: JsonPayloadMappings
}