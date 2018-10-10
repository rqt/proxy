import { equal, ok } from 'zoroaster/assert'
import Context from '../context'
import proxy from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof proxy, 'function')
  },
  async 'calls package without error'() {
    await proxy()
  },
  async 'gets a link to the fixture'({ FIXTURE }) {
    const res = await proxy({
      text: FIXTURE,
    })
    ok(res, FIXTURE)
  },
}

export default T