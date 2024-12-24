import reporter, { Options } from 'cucumber-html-reporter'
import { env } from '../env/parseEnv'
import dotenv from "dotenv";

dotenv.config({ path: env('COMMON_CONFIG_FILE')})

const options: Options = {
    theme: 'bootstrap',
    jsonFile: env('JSON_REPORT_FILE'),
    output: env('HTML_REPORT_FILE'),
    reportSuiteAsScenarios: true,
    launchReport: false
}

reporter.generate(options)