import { test, expect } from '../fixtures'

test.describe('Login Page', () => {

    test.beforeEach(async ({ loginPage }) => {
        await loginPage.open()
    })

    test('should login with valid credentials', async ({ loginPage }) => {
        const email = process.env.TEST_EMAIL ?? ''
        const password = process.env.TEST_PASSWORD ?? ''

        await loginPage.login(email, password)
    })

    test('should show error with invalid credentials', async ({ loginPage }) => {
        await loginPage.login('invalid@email.com', 'wrongpassword')
        await loginPage.expectErrorMessage('Invalid credentials')
    })

})
