---
outline: deep
---
# erFormEditor

Everright-formEditor内部抛出三个组件分别适应不同的业务场景，erFormEditor是表单编辑器组件。
::: tip
erFormEditor组件提供了两种模式进行对字段和布局结构的控制：layoutType：取值为1或2<br>
:::
## **1.布局和字段不分离**

  在PC端设计表单,会自适应mobile端

  **Everright-formEditor的拖拽交互是可以插入列和行的，在该模式下边在mobile端只能插入行**


  **layoutType1数据结构:**
::: details Click me to view the code
  ```json
{
  "list": [{
    "type": "inline",
    "columns": [{
      "type": "grid",
      "label": "Grid",
      "icon": "grid",
      "id": "oMcE5hQ9GVXopoxTomxpS",
      "columns": [{
        "id": "aRk444hX6HaZBsYarNY7a",
        "options": {
          "span": 6,
          "offset": 0,
          "pull": 0,
          "push": 0
        },
        "type": "col",
        "list": [{
          "type": "inline",
          "columns": ["4E3FxDeUlTA7HJf22d-go"],
          "style": {},
          "id": "i_jlg3TxW4vltL7GiDSHs",
          "key": "inline_i_jlg3TxW4vltL7GiDSHs"
        }],
        "style": {},
        "key": "col_aRk444hX6HaZBsYarNY7a"
      }, {
        "id": "16Ev5TX5sxVRaww0YCsra",
        "options": {
          "span": 6,
          "offset": 0,
          "pull": 0,
          "push": 0
        },
        "type": "col",
        "list": [],
        "style": {},
        "key": "col_16Ev5TX5sxVRaww0YCsra"
      }, {
        "id": "XegELtq9tS-vvp2fEegvb",
        "options": {
          "span": 6,
          "offset": 0,
          "pull": 0,
          "push": 0
        },
        "type": "col",
        "list": [],
        "style": {},
        "key": "col_XegELtq9tS-vvp2fEegvb"
      }],
      "options": {
        "gutter": 0,
        "justify": "space-around",
        "align": "top"
      },
      "style": {
        "width": "100%"
      },
      "key": "grid_oMcE5hQ9GVXopoxTomxpS"
    }],
    "style": {},
    "id": "1ctGmv7zDr5XMvK11DRWd",
    "key": "inline_1ctGmv7zDr5XMvK11DRWd"
  }],
  "config": {
    "isSync": true,
    "pc": {
      "size": "default",
      "labelPosition": "left",
      "completeButton": {
        "text": "提交",
        "color": "",
        "backgroundColor": ""
      }
    },
    "mobile": {
      "labelPosition": "left",
      "completeButton": {
        "text": "提交",
        "color": "",
        "backgroundColor": ""
      }
    }
  },
  "fields": [{
    "type": "textarea",
    "label": "Textarea",
    "icon": "textarea",
    "key": "textarea_4E3FxDeUlTA7HJf22d-go",
    "id": "4E3FxDeUlTA7HJf22d-go",
    "options": {
      "clearable": true,
      "isShowWordLimit": false,
      "rows": 6,
      "defaultValue": "",
      "placeholder": "Please enter",
      "disabled": false,
      "labelWidth": 100,
      "isShowLabel": true,
      "required": false,
      "min": null,
      "max": null
    },
    "style": {
      "width": {
        "pc": "100%",
        "mobile": "100%"
      }
    }
  }],
  "data": {}
}
  ```
:::

## **2.布局和字段分离**

  在PC端设计表单时，例如将一个字段为email的字段放入到tabs容器中，切换到mobile端，不会同步tabs容器的，此时如果在mobile新建一个Collapse容器，将email字段放入其中，切换到pc端，是不会同步Collapse容器的，对于在一端新增的字段，切换到另一端，会进行两个集合运算，新增的字段会push到画板底部，删除的字段会在布局结构体中删除掉。字段自身的所有属性是同步的。

  **该模式下的拖拽交互PC、mobile是相同的。**

**layoutType2数据结构:**
::: details Click me to view the code
  ```json
{
  "layoutType": 2,
  "layout": {
    "pc": [{
      "type": "inline",
      "columns": [{
        "type": "grid",
        "label": "Grid",
        "icon": "grid",
        "id": "5pOO6n0gprJ2FIzu-GjCI",
        "columns": [{
          "id": "-DHXuP-seKbaqDfQ9cQFy",
          "options": {
            "span": 6,
            "offset": 0,
            "pull": 0,
            "push": 0
          },
          "type": "col",
          "list": [{
            "type": "inline",
            "columns": ["zqtu3nIl9hL6AoLpI06rQ"],
            "style": {},
            "id": "7QirtilaJg8hyEUmzfzKb",
            "key": "inline_7QirtilaJg8hyEUmzfzKb"
          }],
          "style": {},
          "key": "col_-DHXuP-seKbaqDfQ9cQFy"
        }, {
          "id": "I4Tl0_falE6aAnKogEvL8",
          "options": {
            "span": 6,
            "offset": 0,
            "pull": 0,
            "push": 0
          },
          "type": "col",
          "list": [],
          "style": {},
          "key": "col_I4Tl0_falE6aAnKogEvL8"
        }, {
          "id": "CbYIdWOfgBsHNjNcXfHho",
          "options": {
            "span": 6,
            "offset": 0,
            "pull": 0,
            "push": 0
          },
          "type": "col",
          "list": [],
          "style": {},
          "key": "col_CbYIdWOfgBsHNjNcXfHho"
        }],
        "options": {
          "gutter": 0,
          "justify": "space-around",
          "align": "top"
        },
        "style": {
          "width": "100%"
        },
        "key": "grid_5pOO6n0gprJ2FIzu-GjCI"
      }],
      "style": {},
      "id": "noo-V1hpRl1WmHmr7zH2s",
      "key": "inline_noo-V1hpRl1WmHmr7zH2s"
    }],
    "mobile": [{
      "type": "inline",
      "columns": ["zqtu3nIl9hL6AoLpI06rQ"]
    }]
  },
  "data": {},
  "config": {
    "isSync": true,
    "pc": {
      "size": "default",
      "labelPosition": "left",
      "completeButton": {
        "text": "提交",
        "color": "",
        "backgroundColor": ""
      }
    },
    "mobile": {
      "labelPosition": "left",
      "completeButton": {
        "text": "提交",
        "color": "",
        "backgroundColor": ""
      }
    }
  },
  "fields": [{
    "type": "input",
    "label": "Email",
    "icon": "email",
    "key": "input_zqtu3nIl9hL6AoLpI06rQ",
    "id": "zqtu3nIl9hL6AoLpI06rQ",
    "options": {
      "clearable": true,
      "renderType": 2,
      "disabled": false,
      "showPassword": false,
      "defaultValue": "",
      "placeholder": "Please enter",
      "labelWidth": 100,
      "isShowLabel": true,
      "required": false
    },
    "style": {
      "width": {
        "pc": "100%",
        "mobile": "100%"
      }
    }
  }]
}
  ```
:::

## **3.API**

### **Attributes**
| 名称        |      类型      | 说明                | 可选值 |  默认值 |
| :---- | :-- |:------------------| :---- | :--------- |
| `fieldsConfig`      | Array | 定义字段面板            | - | [(默认值)](https://github.com/Liberty-liu/Everright-formEditor/blob/main/packages/formEditor/componentsConfig.js) |
| `globalConfig`      | Object | 定义表单配置            | - |[(默认值)](https://github.com/Liberty-liu/Everright-formEditor/blob/main/packages/formEditor/componentsConfig.js) |
| `lang` | String  | i18n              | zh-cn\|en | zh-cn |
| `layoutType` | Number  | 定义字段与布局是否分离       | 1\|2 | 1 |
| `fileUploadURI` | String  | 图片、文件上传接口         | - | - |
| `fieldsPanelWidth` | String  | 定义字段面板的宽度         | - | 220px |
| `fieldsPanelDefaultOpeneds` | Array  | 字段面板默认展开          | - | <ClientOnly><el-tooltip content="['defaultField', 'field', 'container']" placement="bottom" effect="light"><el-button link><el-icon><Warning /></el-icon></el-button></el-tooltip></ClientOnly> |
| `configPanelWidth` | String  | 定义属性面板的宽度         | - | 320px |
| `isShowCompleteButton` | Boolean  | 是否在表单配置显示提交按钮配置选项 | true\|false  | true |
| `checkPropsBySelected` | function (selected, propType) {}  | 是否显示config面板的属性   | - | - |
| `quickImages` | Array  | 定义设置背景图片的快捷选项     | <ClientOnly><el-tooltip content="['/public/Everright-logo.svg','/public/Everright-logo.svg','/public/Everright-logo.svg']" placement="bottom" effect="light"><el-button link><el-icon><Warning /></el-icon></el-button></el-tooltip></ClientOnly> | [] |
| `quickImageLimit` | Number  | 上传图片最多在快捷面板显示个数   | - | 5 |
| `quickColors` |  Array | 定义设置背景颜色的快捷选项     | - | <ClientOnly><el-tooltip content="['/public/Everright-logo.svg','/public/Everright-logo.svg','/public/Everright-logo.svg']" placement="bottom" effect="light"><el-button link><el-icon><Warning /></el-icon></el-button></el-tooltip></ClientOnly> |
| `delHandle` | function (selected) {} return false会拦截此次操作  | 删除拦截函数            | - |- |
| `copyHandle` | function (selected) {} return false会拦截此次操作  | 复制拦截函数            | - |- |
| `inlineMax` | Number  | 每行最多可放入个数         | - | 4 |
| `isShowClear` | Boolean  | 是否显示清空按钮          | true\|false | true |
| `isShowI18n` | Boolean  | 是否显示i18n按钮        | true\|false | true |
| `checkFieldsForNewBadge` | function (field) {}   | 为字段面板某个元素加new徽章   | true\|false |false |

### **Slots**
| 名称  |      说明      |
| :---- | :-- |
| operation-left | 操作区域左侧部分 |
| operation-right | 操作区域右侧部分 |

### **Event**
| 事件名称  |      说明      |
| :---- | :-- |
| listener | 编辑器内部所有事件都通过该事件发送，根据type区分 |

type:
- **changeParams**

  selection的数据发生变动

- **lang**

  i18n

- **save**

  操作区域保存按钮

- **logic:cancel**

  逻辑控制弹框确认事件
- **logic:confirm**

  逻辑控制关闭弹框事件


### **Exposes**

| 名称  | 说明| 参数|
| :---- | :-- | :-- |
| switchPlatform | 设置pc/mobile | pc\|mobile |
| getData | 获取数据，内部会校验用户填写的ID是否唯一 | - |
| setData | 设置数据 | - |
