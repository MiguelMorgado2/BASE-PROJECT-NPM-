import dotenv from 'dotenv'
import {env, getJsonFromFile} from "./env/parseEnv";
import {GlobalConfig, HostsConfig, JsonPayloadMappings} from "./env/global";
import * as fs from "fs";

dotenv.config({ path: env('COMMON_CONFIG_FILE')})

const hostsConfig: HostsConfig = getJsonFromFile(env('HOSTS_URLS_PATH'))
const payloadFiles = fs.readdirSync(`${process.cwd()}${env('JSON_PAYLOAD_PATH')}`)

const jsonPayloadMappings: JsonPayloadMappings = payloadFiles.reduce(
    (payloadConfigAcc, file) => {
        const key = file.replace('.json', '')
        const payloadMappings = getJsonFromFile(`${env('JSON_PAYLOAD_PATH')}${file}`)
        return {...payloadConfigAcc, [key]: payloadMappings}
    },
    {}
)

const worldParameters: GlobalConfig = {
    hostsConfig,
    jsonPayloadMappings
}

const common = `./src/features/**/*.feature \
          --require-module ts-node/register \
          --require ./src/step-definitions/**/**/*.ts \
          --world-parameters ${JSON.stringify(worldParameters)}
          -f json:./reports/report.json \
          --parallel ${env('PARALLEL')} \
          --retry ${env('RETRY')} \
          --format progress-bar`

const dev = `${common} --tags '@dev'`
const smoke = `${common} --tags '@smoke'`
const regression = `${common} --tags '@regression'`

console.log(`\n 👾 👾 👾 👾 👾 👾 👾 👾 👾 👾 \n`)

export { dev, smoke, regression }