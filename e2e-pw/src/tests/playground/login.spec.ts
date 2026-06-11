import { test } from '../../fixtures'
import { faker } from '@faker-js/faker'

test.describe('Login', () => {

    test.beforeEach(async ({ homePage, playgroundPage }) => {
        await homePage.open()
        await homePage.clickPlayground()
        await playgroundPage.waitForPage('playground')
    })

    test('should populate login details with env variables', async ({ playgroundPage }) => {
        const email = process.env.TEST_EMAIL ?? ''
        const password = process.env.TEST_PASSWORD ?? ''

        await playgroundPage.fill('playground', 'email', email)
        await playgroundPage.fill('playground', 'password', password)
        await playgroundPage.expectValue('playground', 'email', email)
        await playgroundPage.expectValue('playground', 'password', password)
    })

    test('should show validation on incorrect email', async ({ playgroundPage }) => {
        for (const email of ['cam.testingtalks', 'cam.']) {
            await playgroundPage.fill('playground', 'email', email)
            await playgroundPage.fill('playground', 'password', 'Password1234')
            await playgroundPage.expectText('playground', 'email error', "Please include an '@' in the email address.")
        }
    })

    test('should accept random email and password', async ({ playgroundPage }) => {
        await playgroundPage.fill('playground', 'email', faker.internet.exampleEmail())
        await playgroundPage.fill('playground', 'password', faker.internet.password())
    })

})
