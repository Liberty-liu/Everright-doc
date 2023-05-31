::: tip
You can see the data change by operating the property panel on the right side.
:::
<script setup>
import { useData } from 'vitepress'
import { inject } from 'vue'
const { page } = useData()
const ER = inject('ER')
</script>

#### Field

``` json-vue
{{ER.field}}
```


#### Logical controlle(Configure in the Form Attribute panel)

``` json-vue
{{ER.logic}}
```
