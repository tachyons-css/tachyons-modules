import test from 'ava'
import tachyonsModules from './'

test('tachyons-modules does something awesome', t => {
  t.plan(1)

  tachyonsModules().then(cssModules => {
    t.ok(cssModules)
  })
})
