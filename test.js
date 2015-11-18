import test from 'ava'
import isPromise from 'is-promise'
import tachyonsModules from './'

test('tachyons-modules does something awesome', t => {
  t.plan(1)

  t.true(isPromise(tachyonsModules()))
})
