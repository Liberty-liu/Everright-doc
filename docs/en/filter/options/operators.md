### Operator data

``` json
  [
    {
      label: '等于',
      en_label: 'Equal',
      value: 'equal',
      style: 'noop'
    },
    {
      label: '等于其中之一',
      en_label: 'Equal to one of',
      value: 'one_of',
      style: 'tags' // Control the value as a multiple selection type using the operator, suitable for render types CASCADER, SELECT, REGION, TEXT.
    },
    {
      label: '为空',
      en_label: 'Empty',
      value: 'empty',
      style: 'none' // not display value
    },
    {
      label: '区间',
      en_label: 'Between',
      value: 'between',
      style: 'range' // Control the value as a range type using the operator, suitable for render types NUMBER, TIME, DATE.
    }
  ]
  ```
