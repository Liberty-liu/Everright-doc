import * as erComponentsConfig from 'everright-formeditor/packages/formEditor/componentsConfig.js'
import _ from 'lodash-es'
export default {
  paths () {
    const fieldsConfig = _.cloneDeep(erComponentsConfig.fieldsConfig)
    const fields = [...fieldsConfig[0].list, ...fieldsConfig[1].list].map(e => {
      let label = ''
      if (e.type === 'input') {
        switch (e.options.renderType) {
          case 1:
            label = 'input'
            break
          case 2:
            label = 'email'
            break
          case 3:
            label = 'ID number'
            break
          case 4:
            label = 'phone'
            break
          case 5:
            label = 'URL'
            break
        }
      } else {
        label = e.type
      }
      return label
    })
    const layouts = []
    fieldsConfig[2].list.forEach((field) => {
      layouts.push(field.type)
      switch (field.type) {
        case 'grid':
          layouts.push(`${field.type}>col`)
          break
        case 'tabs':
          layouts.push(`${field.type}>tabsCol`)
          break
        case 'collapse':
          layouts.push(`${field.type}>collapseCol`)
          break
        case 'table':
          layouts.push(`${field.type}>td`)
          break
      }
    })
    return [
      { params: { type: 'root' } },
      ...fields.map((field) => {
        return {
          params:
            {
              type: field === 'ID number' ? 'idNumber' : _.lowerCase(field)
            }
        }
      }),
      ...layouts.map((field) => {
        return {
          params:
            {
              type: field.toLocaleLowerCase()
            }
        }
      })
    ]
  }
}
