import Promise from 'bluebird'
import test from 'ava'
import { delay } from './helpers'

test('should return true', async (t) => {
  console.log('starting ===>', Date.now())
  await delay(2000)
  console.log('finishing ==>', Date.now())

  return true
})
