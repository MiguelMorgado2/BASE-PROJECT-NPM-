import dotenv from 'dotenv'
import reporter, { Options } from 'cucumber-html-reporter'
import { env } from '../env/parseEnv'
import fs from 'fs'

dotenv.config({path: env('COMMON_CONFIG_FILE')})

const jsonFile = env('JSON_REPORT_FILE')

// Skip report generation if the JSON report is empty or has no test results
const rawContent = fs.readFileSync(jsonFile, 'utf-8').trim()
if (!rawContent || rawContent === '{}' || rawContent === '[]') {
    console.log('No test results found in report.json — skipping HTML report generation.')
    process.exit(0)
}

const options: Options = {
    theme: 'bootstrap',
    jsonFile,
    output: env('HTML_REPORT_FILE'),
    screenshotsDirectory: env('SCREENSHOT_PATH'),
    storeScreenshots: true,
    reportSuiteAsScenarios: true,
    launchReport: false,
}

reporter.generate(options)