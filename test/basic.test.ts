import { setup, $fetch } from '@nuxt/test-utils'

describe('Tests', async () => {
  await setup({
    configFile: '../nuxt.config.ts'
  })

  test('test', async () => {
    const html = await $fetch('/')
    expect(html).toContain('Chatie')
  })
})
