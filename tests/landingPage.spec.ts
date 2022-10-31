import { test, expect } from '@playwright/test'

test('homepage related tests', async ({ page }) => {
  await page.goto('/')

  await expect(page).toHaveTitle(/loopstudios/)

  // create a locator
  const mainHeading = page.locator('h1')

  await expect(mainHeading).toHaveText('this is josefin sans')

  const aboutImg = page.locator('.about-section img')

  await expect(aboutImg).toHaveAttribute('alt', 'Male with a virtual headset.')
})
