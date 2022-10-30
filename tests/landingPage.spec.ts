import { test, expect } from '@playwright/test'

test('homepage has looptudios title', async ({ page }) => {
  await page.goto('/')

  await expect(page).toHaveTitle(/loopstudios/)

  // create a locator
  const mainHeading = page.locator('h1')

  await expect(mainHeading).toHaveText('this is josefin sans')
})
