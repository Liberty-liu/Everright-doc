---
outline: deep
---
# erFormPreview

Everright-formEditor内部抛出三个组件分别适应不同的业务场景，erFormPreview是用于预览和录入表单数据的组件
- 根据当前页面判断当前处于PC端还是移动端，并展示对应的表单预览页面。
- 根据当前语言环境（如中文或英文）来展示对应语言环境下的校验文案。

## **API**

### **Attributes**
| 名称        |      类型      |  说明 | 可选值 |  默认值 |
| :---- | :-- | :---- | :---- | :--------- |
| `lang` | String  | i18n | zh-cn\|en | zh-cn |
| `layoutType` | Number  | 定义字段与布局是否分离 | 1\|2 | 1 |
| `fileUploadURI` | String  | 图片、文件上传接口 | - | - |
| `isShowCompleteButton` | Boolean  | 是否在表单配置显示提交按钮配置选项 | true\|false  | true |

### **Event**
| 事件名称  |      说明      |
| :---- | :-- |
| listener | 编辑器内部所有事件都通过该事件发送，根据type区分 | 

type:
- **submit**

  `isShowCompleteButton=true`用户提交数据事件

### **Exposes**

| 名称  | 说明| 参数|
| :---- | :-- | :-- |
| switchPlatform | 设置pc/mobile | pc\|mobile |
| getData | 获取数据，内部会校验用户填写的ID是否唯一 | - |
| setData | 设置数据,如果设置value，value的数据会回显到data的每一个字段 | (data, value?) => {} | 

- **setData**

  用于设置表单渲染所需的数据结构和回显数据。

  `data`: 用于渲染表单的数据结构，包括表单布局和表单控件信息等

  `value`: 用于回显表单数据的对象，包括每个表单控件的值。
