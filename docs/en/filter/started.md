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

## Explanation of the different builds
In the [dist/ directory](https://unpkg.com/browse/everright-filter@1.1.0/dist/) of the npm package you will find the different builds

- `without-element-plus`(element-plus is required) `Default`
- `with-element-plus`(Built-in element-plus)

|   | Excludes element-plus(default)  | Includes element-plus(v2.3.3) |
| ------------- | ------------- | ------------- |
| UMD | EverrightFilter-without-element-plus.umd.cjs | EverrightFilter-with-element-plus.umd.cjs |
| ES | EverrightFilter-without-element-plus.js | EverrightFilter-with-element-plus.js |
| IIFE | EverrightFilter-without-element-plus.iife.js | EverrightFilter-with-element-plus.iife.js |
| css | EverrightFilter-without-element-plus.css | EverrightFilter-with-element-plus.css |

<details>
  <summary>Click Me to see which components are built in</summary>

#### Includes element-plus(v2.3.3)

Based on ES modules tree shaking

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
