import { test } from '../fixtures'

test.describe('Edit Contact', () => {

    test('should edit a contact', async ({ homePage, createContactPage, editContactPage }) => {
        await homePage.open()
        await homePage.createContact('Lisa Simpson', 'Female', '939-555-0113', '742 Evergreen Terrace', 'Springfield')

        await homePage.fill('common', 'search', 'Lisa Simpson')
        await homePage.expectVisible('common', 'contact')
        await homePage.click('common', 'edit')
        await editContactPage.waitForPage('edit contact')

        await editContactPage.fill('common', 'name', 'Ned Flanders')
        await editContactPage.selectOption('common', 'gender', 'Male')
        await editContactPage.fill('common', 'phone', '636-555-8904')
        await editContactPage.fill('common', 'street', '740 Evergreen Terrace')
        await editContactPage.fill('common', 'city', 'Shelbyville')
        await editContactPage.click('common', 'save')

        await homePage.fill('common', 'search', 'Ned Flanders')
        await homePage.expectVisible('common', 'contact')
        await homePage.expectText('common', 'name', 'Ned Flanders')
        await homePage.expectText('common', 'gender', 'Male')
        await homePage.expectText('common', 'address', '740 Evergreen Terrace, Shelbyville')
    })

})
