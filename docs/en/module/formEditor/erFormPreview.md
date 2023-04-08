---
outline: deep
---
# erFormPreview

Everright-formEditor has three internal components that are suitable for different business scenarios. erFormPreview is a component used for previewing and inputting form data.
- Display the corresponding form preview page based on whether the current page is on PC or mobile.
- Display validation messages in the corresponding language environment based on the current language setting (e.g. Chinese or English).

## **API**

### **Attributes**
| Name        |      Type      |  Description | Accepted Values |  Default |
| :---- | :-- | :---- | :---- | :--------- |
| `lang` | String  | i18n | zh-cn\|en | zh-cn |
| `layoutType` | Number  | Defining whether fields and layouts are separate | 1\|2 | 1 |
| `fileUploadURI` | String  | Image and file upload URL | - | - |
| `isShowCompleteButton` | Boolean  | Whether to display the option to configure the submit button in the form settings. | true\|false  | true |

### **Event**
| Name  |      Description      |
| :---- | :-- |
| listener | All events within the editor are sent through this event, differentiated by type | 

type:
- **submit**

  `isShowCompleteButton=true`User data submission event

### **Exposes**

| Name  | Description| Parameters|
| :---- | :-- | :-- |
| switchPlatform | Set pc/mobile | pc\|mobile |
| getData | Get data, with internal validation for unique IDs entered by user. | - |
| setData | Setting data. If the value is set, the value data will be echoed to each field in the data | (data, value?) => {} | 

