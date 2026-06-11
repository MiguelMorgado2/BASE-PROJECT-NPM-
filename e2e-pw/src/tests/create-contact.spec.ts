import { test } from '../fixtures'

test.describe('Create Contact', () => {

    test('should create a new contact', async ({ homePage, createContactPage }) => {
        await homePage.open()
        await homePage.clickCreate()
        await createContactPage.waitForPage('create contact')
        await createContactPage.expectText('create contact', 'create contact header', 'Create Contact')

        await createContactPage.fill('common', 'name', 'Terry Barks')
        await createContactPage.selectOption('common', 'gender', 'Male')
        await createContactPage.fill('common', 'phone', '939-555-0113')
        await createContactPage.fill('common', 'street', '742 Puma Terrace')
        await createContactPage.fill('common', 'city', 'Springfield')
        await createContactPage.click('common', 'save')
        await createContactPage.waitForPage('home')

        await homePage.fill('common', 'search', 'Terry Barks')
        await homePage.expectVisible('common', 'contact')
        await homePage.expectEqualText('common', 'name', 'Terry Barks')
        await homePage.expectText('common', 'gender', 'Male')
        await homePage.expectEqualText('common', 'address', '742 Puma Terrace, Springfield')
    })

    test('should not persist contacts after page refresh', async ({ homePage, createContactPage }) => {
        await homePage.open()
        await homePage.clickCreate()
        await createContactPage.waitForPage('create contact')

        await createContactPage.fill('common', 'name', 'Tanya Hardie')
        await createContactPage.selectOption('common', 'gender', 'Female')
        await createContactPage.fill('common', 'phone', '0434677333')
        await createContactPage.fill('common', 'street', '152 Margi Court')
        await createContactPage.fill('common', 'city', 'Shelbyville')
        await createContactPage.click('common', 'save')
        await createContactPage.waitForPage('home')

        await homePage.fill('common', 'search', 'Tanya Hardie')
        await homePage.expectVisible('common', 'contact')

        await homePage.reload()
        await homePage.fill('common', 'search', 'Tanya Hardie')
        await homePage.expectNotVisible('common', 'contact')
    })

})
