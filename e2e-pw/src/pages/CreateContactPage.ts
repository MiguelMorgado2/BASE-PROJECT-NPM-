import { Page } from '@playwright/test'
import { GlobalConfig } from '../env/global'
import { BasePage } from './BasePage'

export class CreateContactPage extends BasePage {
    private readonly PAGE_ID = 'create contact'

    constructor(page: Page, globalConfig: GlobalConfig) {
        super(page, globalConfig)
    }
}
