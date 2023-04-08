---
outline: deep
---
# Installation

## Prerequisites
- vue >= 3
- element-plus >= 2.3.1
- vant >= 4.1.1

## Using Package Manager
::: code-group

```shell [pnpm]
pnpm install everright-formeditor
```

```shell [npm]
npm i everright-formeditor
```

```shell [yarn]
yarn add everright-formeditor
```

:::

## `erFormEditor`
```html
<script setup>
import { ref } from 'vue'
import { erFormEditor } from 'everright-formeditor'
import 'Everright-formEditor/dist/style.css'
const lang = ref('zh-cn')
const EReditorRef = ref(null)
const handleListener = async ({ type, data }) => {
  switch (type) {
    case 'lang':
      lang.value = data
      break
  }
}
</script>
<template>
  <er-form-editor
    :lang="lang"
    @listener="handleListener"
    ref="EReditorRef"
  />
</template>
```

## `erFormPreview`
```html
<script setup>
import { erFormPreview } from 'everright-formeditor'
import 'Everright-formEditor/dist/style.css'
const EReditorRef = ref(null)
const handleListener = async ({ type, data }) => {
  switch (type) {
    case 'submit':
      break
  }
}
</script>
<template>
  <er-form-preview
    @listener="handleListener"
    ref="EReditorRef"
  />
</template>
```

## `erFormConfig`
```html
<script setup>
import { ref } from 'vue'
import { erFormConfig } from 'everright-formeditor'
import 'Everright-formEditor/dist/style.css'
const lang = ref('zh-cn')
const EReditorRef = ref(null)
const handleListener = async ({ type, data }) => {
  switch (type) {
    case 'changeParams':
      break
  }
}
</script>
<template>
  <er-form-config
    :lang="lang"
    @listener="handleListener"
    ref="EReditorRef"
  />
</template>
```
