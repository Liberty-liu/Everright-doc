---
outline: deep
---
# 逻辑控制器

Everright-formEditor的逻辑控制器内部的筛选器部分依赖[Everright-filter](/filter/introduction)

::: tip
当字段结构发生变动，为了保证逻辑控制的准确性，自动删除相应的逻辑规则。[点此查看实现逻辑](https://github.com/Liberty-liu/Everright-formEditor/blob/main/packages/utils/logic.js)
:::
## 显示与隐藏

根据特定条件决定某些元素是否显示或隐藏，根据用户的需求或上下文动态地展示或隐藏相关内容。

<el-image loading="lazy" :preview-src-list="['/img/logicalControlle0.png']" src="/img/logicalControlle0.png"/>

## 必填

根据特定条件决定元素是否必填，在元素被隐藏或只读时跳过必填验证。

<el-image loading="lazy" :preview-src-list="['/img/logicalControlle1.png']" src="/img/logicalControlle1.png"/>

## 只读

根据特定条件来指定字段是否为只读。

<el-image loading="lazy" :preview-src-list="['/img/logicalControlle2.png']" src="/img/logicalControlle2.png"/>

## 逻辑控制器操作符

[点此查看实现逻辑](https://github.com/Liberty-liu/Everright-formEditor/blob/main/packages/hooks/use-logic/index.js)

|                         Field                         | 等于 | 不等于 | 包含 | 不包含 | 大于 | 大于等于 | 小于 | 小于等于 | 区间 | 等于其中之一 | 不等于其中之一 | 属于其中之一 | 不属于其中之一| 为空 | 不为空 |
|:-----------------------------------------------------:| :-------------: |:-------------: | :-------------: | :-------------: | :-------------: | :-------------: | :-------------: |:-------------:| :-------------:| :-------------: | :-------------: | :-------------: | :-------------: | :-------------: | :-------------: |
|                         Input                         |  :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | | | | | | | | | | :white_check_mark: | :white_check_mark: |
|                         Email                         |  :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | | | | | | | | | | :white_check_mark: | :white_check_mark: |
|                       ID number                       |  :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | | | | | | | | | | :white_check_mark: | :white_check_mark: |
|                       Cellphone                       |  :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | | | | | | | | | | :white_check_mark: | :white_check_mark: |
|                          URL                          |  :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | | | | | | | | | | :white_check_mark: | :white_check_mark: |
|                       Textarea                        |  :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | | | | | | | | | | :white_check_mark: | :white_check_mark: |
|                        Number                         |  :white_check_mark: | :white_check_mark: | | | :white_check_mark:| :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | | | | | :white_check_mark:| :white_check_mark: |
|                         Radio                         |  :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | | | | | | | | | | :white_check_mark: | :white_check_mark: |
|                       Checkbox                        |  :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | | | | | | | | | | :white_check_mark: | :white_check_mark: |
|                        Select                         |  :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | | | | | | | | | | :white_check_mark: | :white_check_mark: |
|                         Time                          |  :white_check_mark: | :white_check_mark: | | | :white_check_mark:| :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | | | | | :white_check_mark:| :white_check_mark: |
|                      Date (date)                      |  :white_check_mark: | :white_check_mark: | | | :white_check_mark:| :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | | | | | :white_check_mark:| :white_check_mark: |
|                    Date (datetime)                    |  :white_check_mark: | :white_check_mark: | | | :white_check_mark:| :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | | | | | :white_check_mark:| :white_check_mark: |
|                     Date (dates)                      |  :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | | | | | | | | | | :white_check_mark: | :white_check_mark: |
|                   Date (daterange)                    |  :white_check_mark: | :white_check_mark: |  |  | | | | | | | | | | :white_check_mark: | :white_check_mark: |
|                         Rate                          |  :white_check_mark: | :white_check_mark: | | | :white_check_mark:| :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | | | | | :white_check_mark:| :white_check_mark: |
|                        Switch                         |  :white_check_mark:  |  :white_check_mark:  | | | | | | | | | | | | | |
|                        Slider                         |  :white_check_mark: | :white_check_mark: | | | :white_check_mark:| :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | | | | | | |
|                         Html                          |  :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | | | | | | | | | | :white_check_mark: | :white_check_mark: |
|                       Cascader                        | :white_check_mark: | :white_check_mark:| | | | | | | | | | | | :white_check_mark: | :white_check_mark: |
|                         File                          |  | | | | | | | | | | | | |:white_check_mark: |:white_check_mark: |
|                       Signature                       |  | | | | | | | | | | | | |:white_check_mark: |:white_check_mark: |
|                        Region                         |  | | | | | | | | |:white_check_mark: | :white_check_mark:| :white_check_mark:| :white_check_mark:| :white_check_mark:| :white_check_mark:|
| <el-badge value="new" class="item">Subform</el-badge> |  | | | | | | | | | | | | |:white_check_mark: |:white_check_mark: |


## 后续迭代...
