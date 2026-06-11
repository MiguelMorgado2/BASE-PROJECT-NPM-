import { Page } from '@playwright/test'
import { GlobalConfig } from '../env/global'
import { BasePage } from './BasePage'

export class HomePage extends BasePage {
    private readonly PAGE_ID = 'home'

    constructor(page: Page, globalConfig: GlobalConfig) {
        super(page, globalConfig)
    }

    async open(): Promise<void> {
        await this.navigate(this.PAGE_ID)
        await this.waitForPage(this.PAGE_ID)
    }

    async clickCreate(): Promise<void> {
        await this.click('home', 'create')
    }

    async clickPlayground(): Promise<void> {
        await this.click('common', 'playground')
    }

    async expectHeaderVisible(): Promise<void> {
        await this.expectVisible('common', 'header logo')
    }

    // Helper to create a full contact and return to home page
    async createContact(
        name: string,
        gender: string,
        phone: string,
        street: string,
        city: string
    ): Promise<void> {
        await this.clickCreate()
        await this.waitForPage('create contact')
        await this.fill('common', 'name', name)
        await this.selectOption('common', 'gender', gender)
        await this.fill('common', 'phone', phone)
        await this.fill('common', 'street', street)
        await this.fill('common', 'city', city)
        await this.click('common', 'save')
        await this.waitForPage('home')
    }
}
