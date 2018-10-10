import { makeTestSuite } from 'zoroaster'
import Context from '../context'
import proxy from '../../src'

const ts = makeTestSuite('test/result', {
  async getResults(input) {
    const res = await proxy({
      text: input,
    })
    return res
  },
  context: Context,
})

export default ts