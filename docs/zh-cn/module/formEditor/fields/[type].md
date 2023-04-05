<script setup>
import { useData } from 'vitepress'
import { inject } from 'vue'
const { page } = useData()
const ER = inject('ER')
</script>
{{page.title}}

``` json-vue
{{ER.field}}
```
