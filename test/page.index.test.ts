import { setup, createPage, url } from '@nuxt/test-utils'

describe('Index Page', async () => {
  await setup({
    configFile: '../nuxt.config.ts',
    browser: true,
    build: true
  })

  test('Index Page renders properly', async () => {
    const page = await createPage('/')
    expect(page).toBeTruthy()

    const body = await page.innerHTML('body')
    expect(body).toContain('Welcome to Chatie!')
    expect(body).toContain('Chatie is designed with simplicity')
    expect(body).toContain('Chatie is designed with simplicity')
    expect(body).toContain('Plus, with end-to-end encryption')

    await page.getByText('Chatie').first().click()
    expect(page.url()).toBe(url('/'))

    await page.getByRole('button').first().click()
    await page.waitForURL(url('/login'))
    expect(page.url()).toBe(url('/login'))

    await page.goto(url('/'))

    await page.getByRole('button').last().click()
    await page.waitForURL(url('/register'))
    expect(page.url()).toBe(url('/register'))
  })
})
