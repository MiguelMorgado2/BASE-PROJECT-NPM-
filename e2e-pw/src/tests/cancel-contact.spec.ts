import { test } from '../fixtures'

test.describe('Cancel Contact', () => {

    test('should cancel creating a new contact', async ({ page, homePage, createContactPage }) => {
        await homePage.open()
        await homePage.clickCreate()
        await createContactPage.waitForPage('create contact')

        await createContactPage.fill('common', 'name', 'Milhouse Van Houten')
        await createContactPage.selectOption('common', 'gender', 'Male')
        await createContactPage.fill('common', 'phone', '111-525-2313')
        await createContactPage.fill('common', 'street', '730 Evergreen Terrace')
        await createContactPage.fill('common', 'city', 'Springfield')
        await createContactPage.click('common', 'cancel')
        await createContactPage.waitForPage('home')

        page.on('dialog', dialog => dialog.accept())
        await homePage.click('common', 'delete')
        await homePage.waitForPage('home')

        await homePage.fill('common', 'search', 'Milhouse Van Houten')
        await homePage.expectNotVisible('common', 'contact')
        await homePage.expectText('common', 'no items message', 'There are no items to display')
    })

})
