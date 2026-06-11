import { test } from '../fixtures'

test.describe('Search Contact', () => {

    test('should show no items for non-existent contact', async ({ homePage }) => {
        await homePage.open()
        await homePage.fill('common', 'search', 'Montgomery Burns')
        await homePage.expectNotVisible('common', 'contact')
        await homePage.expectText('common', 'no items message', 'There are no items to display')
    })

    test('should search for a newly created contact', async ({ homePage, createContactPage }) => {
        await homePage.open()
        await homePage.createContact('Maggie Simpson', 'Female', '939-555-0113', '742 Evergreen Terrace', 'Springfield')

        await homePage.fill('common', 'search', 'Maggie Simpson')
        await homePage.expectVisible('common', 'contact')
        await homePage.expectText('common', 'name', 'Maggie Simpson')
        await homePage.expectText('common', 'gender', 'Female')
        await homePage.expectText('common', 'address', '742 Evergreen Terrace, Springfield')
    })

})
