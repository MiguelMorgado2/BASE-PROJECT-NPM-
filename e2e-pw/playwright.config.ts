import { defineConfig, devices } from '@playwright/test'
import dotenv from 'dotenv'

// Load env files
dotenv.config({ path: process.env.COMMON_CONFIG_FILE ?? 'env/common.env' })

const environment = process.env.NODE_ENV ?? 'DEV'
dotenv.config({ path: `${process.env.ENV_PATH ?? './env/'}${environment}.env` })

export default defineConfig({
    testDir: './src/tests',
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 4 : 1,
    reporter: [
        ['html', { outputFolder: 'playwright-report', open: 'never' }],
        ['list']
    ],
    use: {
        headless: process.env.HEADLESS === 'true',
        viewport: {
            width: Number(process.env.BROWSER_WIDTH ?? 1280),
            height: Number(process.env.BROWSER_HEIGHT ?? 720)
        },
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        actionTimeout: Number(process.env.ACTION_TIMEOUT ?? 10000),
        navigationTimeout: Number(process.env.NAVIGATION_TIMEOUT ?? 30000),
    },
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        },
        {
            name: 'firefox',
            use: { ...devices['Desktop Firefox'] },
        },
        {
            name: 'webkit',
            use: { ...devices['Desktop Safari'] },
        },
    ],
    outputDir: 'test-results/',
})
