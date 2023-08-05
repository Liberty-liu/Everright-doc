---
outline: deep
---
# Installation

## Prerequisites
- vue >= 3
- element-plus >= 2.3.1

## Using Package Manager
::: code-group

```shell [pnpm]
pnpm install everright-filter
```

```shell [npm]
npm i everright-filter
```

```shell [yarn]
yarn add everright-filter
```

:::
## 不同构建版本的解释
在 [npm 包的 dist 目录](https://unpkg.com/browse/everright-filter@1.1.0/dist/)会找到两种构建版本
- `without-element-plus`(需提供element-plus) `Default`
- `with-element-plus`(内置element-plus)

|   | Excludes element-plus(default)  | Includes element-plus(v2.3.3) |
| ------------- | ------------- | ------------- |
| UMD | EverrightFilter-without-element-plus.umd.cjs | EverrightFilter-with-element-plus.umd.cjs |
| ES | EverrightFilter-without-element-plus.js | EverrightFilter-with-element-plus.js |
| IIFE | EverrightFilter-without-element-plus.iife.js | EverrightFilter-with-element-plus.iife.js |
| css | EverrightFilter-without-element-plus.css | EverrightFilter-with-element-plus.css |

<details>
  <summary>点击查看element-plus哪些组件被包含其中</summary>

#### Includes element-plus(v2.3.3)

基于 ES modules 的 tree shaking

| element-plus components |
|------------------|
| ElButton         |
| ElCascader       |
| ElCheckbox       |
| ElCheckboxGroup  |
| ElDatePicker     |
| ElIcon           |
| ElInput          |
| ElInputNumber    |
| ElOption         |
| ElPopover        |
| ElScrollbar      |
| ElSelect         |
| ElSwitch         |
| ElTabPane        |
| ElTabs           |
| ElTag            |
| ElTimePicker     |
| ElTooltip        |
| vLoading         |

</details>
