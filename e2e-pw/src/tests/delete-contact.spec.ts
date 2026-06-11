import { test } from '../fixtures'

test.describe('Delete Contact', () => {

    test('should delete a contact', async ({ page, homePage, createContactPage }) => {
        await homePage.open()
        await homePage.createContact('Maude Flanders', 'Female', '939-555-0113', '740 Evergreen Terrace', 'Shelbyville')

        await homePage.fill('common', 'search', 'Maude Flanders')
        await homePage.expectVisible('common', 'contact')

        page.on('dialog', dialog => dialog.accept())
        await homePage.click('common', 'delete')
        await homePage.waitForPage('home')

        await homePage.fill('common', 'search', 'Maude Flanders')
        await homePage.expectNotVisible('common', 'contact')
        await homePage.expectText('common', 'no items message', 'There are no items to display')
    })

    test('should cancel deleting a contact', async ({ page, homePage, createContactPage }) => {
        await homePage.open()
        await homePage.createContact('Maude Flanders', 'Female', '939-555-0113', '740 Evergreen Terrace', 'Shelbyville')

        await homePage.fill('common', 'search', 'Maude Flanders')
        await homePage.expectVisible('common', 'contact')

        page.on('dialog', dialog => dialog.dismiss())
        await homePage.click('common', 'delete')

        await homePage.fill('common', 'search', 'Maude Flanders')
        await homePage.expectVisible('common', 'contact')
        await homePage.expectText('common', 'name', 'Maude Flanders')
    })

})
