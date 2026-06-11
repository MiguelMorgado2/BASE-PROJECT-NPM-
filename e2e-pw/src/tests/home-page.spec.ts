import { test } from '../fixtures'

test.describe('Home Page', () => {

    test('should display header and contacts title', async ({ homePage }) => {
        await homePage.open()
        await homePage.expectHeaderVisible()
        await homePage.expectText('home', 'contacts header', 'Contacts')
    })

    test('should not display a contact that does not exist', async ({ homePage }) => {
        await homePage.open()
        await homePage.fill('common', 'search', 'Funky Name')
        await homePage.expectNotVisible('common', 'contact')
    })

})
