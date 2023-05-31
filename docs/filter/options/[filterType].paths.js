import { data } from '../../../.vitepress/data/example.data.js'
export default {
  paths () {
    const result = []
    data.options.forEach(e => {
      e.children.forEach(e => {
        result.push({ params: { filterType: e.value } })
      })
    })
    return result
  }
}
