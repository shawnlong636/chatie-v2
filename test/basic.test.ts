import { describe, assert, expect, test } from 'vitest'
import { setup } from '@nuxt/test-utils'

describe('My test', async () => {
  await setup()

  test('Math.sqrt()', () => {
    expect(Math.sqrt(4)).toBe(2)
  })
})