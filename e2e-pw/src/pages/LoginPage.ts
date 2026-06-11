import { Page } from '@playwright/test'
import { GlobalConfig } from '../env/global'
import { BasePage } from './BasePage'

export class LoginPage extends BasePage {
    private readonly PAGE_ID = 'login'

    constructor(page: Page, globalConfig: GlobalConfig) {
        super(page, globalConfig)
    }

    async open(): Promise<void> {
        await this.navigate(this.PAGE_ID)
        await this.waitForPage(this.PAGE_ID)
    }

    async login(email: string, password: string): Promise<void> {
        await this.fill(this.PAGE_ID, 'email input', email)
        await this.fill(this.PAGE_ID, 'password input', password)
        await this.click(this.PAGE_ID, 'submit button')
    }

    async expectErrorMessage(message: string): Promise<void> {
        await this.expectText(this.PAGE_ID, 'error message', message)
    }
}
