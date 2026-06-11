import { Page } from '@playwright/test'
import { GlobalConfig } from '../env/global'
import { BasePage } from './BasePage'

export class EditContactPage extends BasePage {
    private readonly PAGE_ID = 'edit contact'

    constructor(page: Page, globalConfig: GlobalConfig) {
        super(page, globalConfig)
    }
}
