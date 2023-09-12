---
outline: deep
---
# erFormEditor

Everright-formEditor has three internal components that are suitable for different business scenarios. erFormEditor is the form editor component.
::: tip
erFormEditor component provides two modes for controlling the fields and layout structure：layoutType：1 or 2<br>
:::
## **1.Fields and layout not separated**

  When designing a form on the PC, it will automatically adapt to the mobile end.

  **Everright-formEditor's default drag-and-drop interaction allows for inserting both columns and rows.  However, in this mode, on mobile, only rows can be inserted.**


  **layoutType1 data structure:**
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

## **2.Fields and layout separated**

  When designing a form on a PC, for example, if a field with the type "email" is placed in a tabs container, switching to mobile mode will not synchronize the tabs container.  If a new Collapse container is created on mobile and the email field is placed inside it, switching back to PC mode will not synchronize the Collapse container.  When a new field is added in one mode and then the mode is switched, a collection operation is performed where the new field is pushed to the bottom of the canvas, and any deleted fields are removed from the layout structure.  All properties of the fields are synchronized.

  **The drag-and-drop interaction in this mode is the same for both PC and mobile**

**layoutType2 data structure:**
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
| Name        |      Type      |  Description | Accepted Values |  Default |
| :---- | :-- | :---- | :---- | :--------- |
| `fieldsConfig`      | Array | Definition panel of fields| - | [(Default)](https://github.com/Liberty-liu/Everright-formEditor/blob/main/packages/formEditor/componentsConfig.js) |
| `globalConfig`      | Object | Defining Form Configuration | - |[(Default)](https://github.com/Liberty-liu/Everright-formEditor/blob/main/packages/formEditor/componentsConfig.js) |
| `lang` | String  | i18n | zh-cn\|en | zh-cn |
| `layoutType` | Number  | Defining whether fields and layouts are separate | 1\|2 | 1 |
| `fileUploadURI` | String  | Image and file upload URL | - | - |
| `fieldsPanelWidth` | String  | Define the width of the `fieldsPanel`. | - | 220px |
| `fieldsPanelDefaultOpeneds` | Array  | array that contains indexes of currently active sub-menus | - | <ClientOnly><el-tooltip content="['defaultField', 'field', 'container']" placement="bottom" effect="light"><el-button link><el-icon><Warning /></el-icon></el-button></el-tooltip></ClientOnly> |
| `configPanelWidth` | String  | Define the width of the `configPanel` | - | 320px |
| `isShowCompleteButton` | Boolean  | Whether to display the option to configure the submit button in the form settings. | true\|false  | true |
| `checkPropsBySelected` | function (selected, propType) {}  | Define which properties to display in the config panel | - | - |
| `quickImages` | Array  | Define quick options for setting background images | <ClientOnly><el-tooltip content="['/public/Everright-logo.svg','/public/Everright-logo.svg','/public/Everright-logo.svg']" placement="bottom" effect="light"><el-button link><el-icon><Warning /></el-icon></el-button></el-tooltip></ClientOnly> | [] |
| `quickImageLimit` | Number  | The maximum number of uploaded images displayed in the shortcut panel | - | 5 |
| `quickColors` |  Array | Defining shortcut options for setting background color | - | <ClientOnly><el-tooltip content="['/public/Everright-logo.svg','/public/Everright-logo.svg','/public/Everright-logo.svg']" placement="bottom" effect="light"><el-button link><el-icon><Warning /></el-icon></el-button></el-tooltip></ClientOnly> |
| `delHandle` | function (selected) {} return false  | Deletion interception function | - |- |
| `copyHandle` | function (selected) {} return false  | Copy interception function | - |- |
| `inlineMax` | Number  | Maximum number of items per row | - | 4 |
| `isShowClear` | Boolean  | Whether to display the clear button | true\|false | true |
| `isShowI18n` | Boolean  | Whether to display the i18n button | true\|false | true |
| `checkFieldsForNewBadge` | function (field) {}   | Through the checkFieldsForNewBadge function, a new badge can be added to a certain element in the fields panel.   | true\|false |false |

### **Slots**
| Name  |      Description      |
| :---- | :-- |
| operation-left | The left side of the operation area |
| operation-right | The right side of the operation area |

### **Event**
| Name  |      Description      |
| :---- | :-- |
| listener | All events within the editor are sent through this event, differentiated by type |

type:
- **changeParams**

  Selection data has changed

- **lang**

  i18n

- **save**

  Save button in the operation area

- **logic:cancel**

  Logical controller enclosure confirmation event
- **logic:confirm**

  Logical control closes the pop-up event

### **Exposes**

| Name  | Description| Parameters|
| :---- | :-- | :-- |
| switchPlatform | Set pc/mobile | pc\|mobile |
| getData | Get data, with internal validation for unique IDs entered by user. | - |
| setData | Set data | - |
