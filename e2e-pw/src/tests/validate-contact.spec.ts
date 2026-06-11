import { test } from '../fixtures'

test.describe('Validate Contact', () => {

    test('should hit validation errors on each field then create contact', async ({ homePage, createContactPage }) => {
        await homePage.open()
        await homePage.clickCreate()
        await createContactPage.waitForPage('create contact')

        await createContactPage.click('common', 'save')
        await createContactPage.expectText('common', 'error message', 'Error: The "name" field can\'t be empty.')

        await createContactPage.fill('common', 'name', 'Bart Simpson')
        await createContactPage.click('common', 'save')
        await createContactPage.expectText('common', 'error message', 'Error: The "phone" field can\'t be empty.')

        await createContactPage.fill('common', 'phone', '939-555-0113')
        await createContactPage.click('common', 'save')
        await createContactPage.expectText('common', 'error message', 'Error: The "street" field can\'t be empty.')

        await createContactPage.fill('common', 'street', '742 Evergreen Terrace')
        await createContactPage.click('common', 'save')
        await createContactPage.expectText('common', 'error message', 'Error: The "city" field can\'t be empty.')

        await createContactPage.fill('common', 'city', 'Springfield')
        await createContactPage.click('common', 'save')
        await createContactPage.waitForPage('home')

        await homePage.fill('common', 'search', 'Bart Simpson')
        await homePage.expectVisible('common', 'contact')
        await homePage.expectText('common', 'name', 'Bart Simpson')
    })

})
