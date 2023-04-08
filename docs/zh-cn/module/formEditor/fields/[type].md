---
outline: deep
---
::: tip
操作右侧的属性面板，可以看到数据变动。
:::
<script setup>
import { useData } from 'vitepress'
import { inject } from 'vue'
const { page } = useData()
const ER = inject('ER')
</script>

``` json-vue
{{ER.field}}
```

