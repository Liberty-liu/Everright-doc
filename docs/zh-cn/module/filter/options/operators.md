### Operator data

``` json
  [
    {
      label: '等于',
      en_label: 'Equal',
      value: 'equal',
      style: 'noop' // 无意义
    },
    {
      label: '等于其中之一',
      en_label: 'Equal to one of',
      value: 'one_of',
      style: 'tags' // 由操作符控制value为多选类型，适用于renderType CASCADER、SELECT、REGION、TEXT
    },
    {
      label: '为空',
      en_label: 'Empty',
      value: 'empty',
      style: 'none' // 不显示 value
    },
    {
      label: '区间',
      en_label: 'Between',
      value: 'between',
      style: 'range' // 由操作符控制value为区间类型，适用于renderType NUMBER、TIME、DATE
    }
  ]
  ```
