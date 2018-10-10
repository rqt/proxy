/* yarn example/ */
import proxy from '../src'

(async () => {
  const res = await proxy({
    text: 'example',
  })
  console.log(res)
})()