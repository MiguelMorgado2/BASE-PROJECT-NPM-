import { Page } from '@playwright/test'
import { GlobalConfig } from '../env/global'
import { BasePage } from './BasePage'

export class PlaygroundPage extends BasePage {
    private readonly PAGE_ID = 'playground'

    constructor(page: Page, globalConfig: GlobalConfig) {
        super(page, globalConfig)
    }

    async open(): Promise<void> {
        await this.navigate(this.PAGE_ID)
        await this.waitForPage(this.PAGE_ID)
    }
}
