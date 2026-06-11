import { test as base, expect } from '@playwright/test'
import dotenv from 'dotenv'
import fs from 'fs'
import { GlobalConfig, HostsConfig, PageElementMappings, PagesConfig } from '../env/global'
import { env, envOptional, getJsonFromFile } from '../env/parseEnv'
import { HomePage } from '../pages/HomePage'
import { LoginPage } from '../pages/LoginPage'
import { PlaygroundPage } from '../pages/PlaygroundPage'
import { CreateContactPage } from '../pages/CreateContactPage'
import { EditContactPage } from '../pages/EditContactPage'

// Load environment variables
const environment = process.env.NODE_ENV ?? 'DEV'
dotenv.config({ path: envOptional('COMMON_CONFIG_FILE', 'env/common.env') })
dotenv.config({ path: `${envOptional('ENV_PATH', './env/')}${environment}.env` })

// Build global config
const hostsConfig: HostsConfig = getJsonFromFile(env('HOSTS_URLS_PATH'))
const pagesConfig: PagesConfig = getJsonFromFile(env('PAGE_URLS_PATH'))

const mappingFiles = fs.readdirSync(`${process.cwd()}${env('PAGE_ELEMENTS_PATH')}`)
const pageElementMappings: PageElementMappings = mappingFiles.reduce(
    (acc, file) => {
        const key = file.replace('.json', '')
        const mappings = getJsonFromFile(`${env('PAGE_ELEMENTS_PATH')}${file}`)
        return { ...acc, [key]: mappings }
    },
    {}
)

// Define custom fixture types
type PageFixtures = {
    globalConfig: GlobalConfig
    homePage: HomePage
    loginPage: LoginPage
    playgroundPage: PlaygroundPage
    createContactPage: CreateContactPage
    editContactPage: EditContactPage
}

// Extend base test with custom fixtures
export const test = base.extend<PageFixtures>({
    globalConfig: async ({}, use) => {
        const market = process.env.MARKET ?? 'PT'
        const config: GlobalConfig = {
            hostsConfig,
            pagesConfig,
            pageElementMappings,
            market,
        }
        await use(config)
    },

    homePage: async ({ page, globalConfig }, use) => {
        await use(new HomePage(page, globalConfig))
    },

    loginPage: async ({ page, globalConfig }, use) => {
        await use(new LoginPage(page, globalConfig))
    },

    playgroundPage: async ({ page, globalConfig }, use) => {
        await use(new PlaygroundPage(page, globalConfig))
    },

    createContactPage: async ({ page, globalConfig }, use) => {
        await use(new CreateContactPage(page, globalConfig))
    },

    editContactPage: async ({ page, globalConfig }, use) => {
        await use(new EditContactPage(page, globalConfig))
    },
})

export { expect }
