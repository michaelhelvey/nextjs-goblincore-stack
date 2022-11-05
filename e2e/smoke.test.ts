import { expect, test } from '@playwright/test'

test('homepage has title and links to intro page', async ({ page }) => {
	await page.goto('/')

	// Expect a title "to contain" a substring.
	await expect(page).toHaveTitle(/Next.js Goblincore Stack/)

	await expect(page.getByRole('heading')).toHaveText(
		'Next.js 13 Starter Project'
	)
})
