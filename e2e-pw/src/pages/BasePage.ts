import { Page, Locator, expect } from '@playwright/test'
import { ElementKey, GlobalConfig, PageId } from '../env/global'

export abstract class BasePage {
    constructor(
        protected readonly page: Page,
        protected readonly globalConfig: GlobalConfig
    ) {}

    // --- Navigation ---

    async navigate(pageId: PageId): Promise<void> {
        const environment = process.env.NODE_ENV ?? 'DEV'
        const market = this.globalConfig.market
        const hostKey = `${environment}_${market}`
        const hostPath = this.globalConfig.hostsConfig[hostKey]

        if (!hostPath) {
            throw Error(`🧨 No host found for "${hostKey}" in hosts.json 🧨`)
        }

        const url = new URL(hostPath)
        const pageConfig = this.globalConfig.pagesConfig[pageId]

        if (!pageConfig) {
            throw Error(`🧨 No page found for "${pageId}" in pages.json 🧨`)
        }

        url.pathname = pageConfig.route
        await this.page.goto(url.href)
    }

    async waitForPage(pageId: PageId): Promise<void> {
        const pageConfig = this.globalConfig.pagesConfig[pageId]
        const regex = new RegExp(pageConfig.regex)
        await this.page.waitForURL(regex)
    }

    async reload(): Promise<void> {
        await this.page.reload()
    }

    // --- Element helpers ---

    protected getLocator(pageId: PageId, elementKey: ElementKey): Locator {
        const { pageElementMappings } = this.globalConfig
        const selector =
            pageElementMappings[pageId]?.[elementKey] ??
            pageElementMappings['common']?.[elementKey]

        if (!selector) {
            throw Error(`🧨 Unable to find mapping for "${elementKey}" on page "${pageId}" 🧨`)
        }

        return this.page.locator(selector)
    }

    // --- Visibility assertions ---

    async expectVisible(pageId: PageId, elementKey: ElementKey): Promise<void> {
        await expect(this.getLocator(pageId, elementKey)).toBeVisible()
    }

    async expectNotVisible(pageId: PageId, elementKey: ElementKey): Promise<void> {
        await expect(this.getLocator(pageId, elementKey)).not.toBeVisible()
    }

    async expectVisibleAtIndex(pageId: PageId, elementKey: ElementKey, index: number): Promise<void> {
        await expect(this.getLocator(pageId, elementKey).nth(index)).toBeVisible()
    }

    async expectCount(pageId: PageId, elementKey: ElementKey, count: number): Promise<void> {
        await expect(this.getLocator(pageId, elementKey)).toHaveCount(count)
    }

    // --- Text assertions ---

    async expectText(pageId: PageId, elementKey: ElementKey, text: string): Promise<void> {
        await expect(this.getLocator(pageId, elementKey)).toContainText(text)
    }

    async expectNotText(pageId: PageId, elementKey: ElementKey, text: string): Promise<void> {
        await expect(this.getLocator(pageId, elementKey)).not.toContainText(text)
    }

    async expectEqualText(pageId: PageId, elementKey: ElementKey, text: string): Promise<void> {
        await expect(this.getLocator(pageId, elementKey)).toHaveText(text)
    }

    async expectTextAtIndex(pageId: PageId, elementKey: ElementKey, index: number, text: string): Promise<void> {
        await expect(this.getLocator(pageId, elementKey).nth(index)).toContainText(text)
    }

    async expectNotTextAtIndex(pageId: PageId, elementKey: ElementKey, index: number, text: string): Promise<void> {
        await expect(this.getLocator(pageId, elementKey).nth(index)).not.toContainText(text)
    }

    // --- Value assertions ---

    async expectValue(pageId: PageId, elementKey: ElementKey, value: string): Promise<void> {
        await expect(this.getLocator(pageId, elementKey)).toHaveValue(value)
    }

    async expectNotValue(pageId: PageId, elementKey: ElementKey, value: string): Promise<void> {
        await expect(this.getLocator(pageId, elementKey)).not.toHaveValue(value)
    }

    // --- State assertions ---

    async expectEnabled(pageId: PageId, elementKey: ElementKey): Promise<void> {
        await expect(this.getLocator(pageId, elementKey)).toBeEnabled()
    }

    async expectNotEnabled(pageId: PageId, elementKey: ElementKey): Promise<void> {
        await expect(this.getLocator(pageId, elementKey)).toBeDisabled()
    }

    async expectChecked(pageId: PageId, elementKey: ElementKey): Promise<void> {
        await expect(this.getLocator(pageId, elementKey)).toBeChecked()
    }

    async expectNotChecked(pageId: PageId, elementKey: ElementKey): Promise<void> {
        await expect(this.getLocator(pageId, elementKey)).not.toBeChecked()
    }

    // --- Attribute assertions ---

    async expectAttribute(pageId: PageId, elementKey: ElementKey, attribute: string, value: string): Promise<void> {
        await expect(this.getLocator(pageId, elementKey)).toHaveAttribute(attribute, value)
    }

    async expectNotAttribute(pageId: PageId, elementKey: ElementKey, attribute: string, value: string): Promise<void> {
        await expect(this.getLocator(pageId, elementKey)).not.toHaveAttribute(attribute, value)
    }

    // --- Actions ---

    async click(pageId: PageId, elementKey: ElementKey): Promise<void> {
        await this.getLocator(pageId, elementKey).click()
    }

    async clickAtIndex(elementKey: ElementKey, index: number): Promise<void> {
        const { pageElementMappings } = this.globalConfig
        const selector = pageElementMappings['playground']?.[elementKey] ?? pageElementMappings['common']?.[elementKey]
        if (!selector) throw Error(`🧨 Unable to find mapping for "${elementKey}" 🧨`)
        await this.page.locator(selector).nth(index).click()
    }

    async fill(pageId: PageId, elementKey: ElementKey, value: string): Promise<void> {
        await this.getLocator(pageId, elementKey).fill(value)
    }

    async selectOption(pageId: PageId, elementKey: ElementKey, option: string): Promise<void> {
        await this.getLocator(pageId, elementKey).selectOption(option)
    }

    async check(pageId: PageId, elementKey: ElementKey): Promise<void> {
        await this.getLocator(pageId, elementKey).check()
    }

    async uncheck(pageId: PageId, elementKey: ElementKey): Promise<void> {
        await this.getLocator(pageId, elementKey).uncheck()
    }

    async scrollIntoView(pageId: PageId, elementKey: ElementKey): Promise<void> {
        await this.getLocator(pageId, elementKey).scrollIntoViewIfNeeded()
    }

    async screenshot(name: string): Promise<void> {
        await this.page.screenshot({
            path: `${process.env.SCREENSHOT_PATH ?? './test-results/screenshots/'}${name}.png`
        })
    }
}
