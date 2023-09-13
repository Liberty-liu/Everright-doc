---
outline: deep
---
# Logical controller

The filter inside the logic controller of Everright-formEditor is partially completed by [Everright-filter](/en/filter/introduction)

::: tip
When the field structure changes, in order to ensure the accuracy of logic control, automatically delete the corresponding logic rules.[Click here for the implementation logic](https://github.com/Liberty-liu/Everright-formEditor/blob/main/packages/utils/logic.js)
:::
## Visible

Determining whether certain elements are displayed or hidden based on specific conditions and dynamically showing or hiding relevant content based on user needs or context.

<el-image loading="lazy" :preview-src-list="['/img/logicalControlle0.png']" src="/img/logicalControlle0.png"/>

## Required

Determining whether an element is required based on specific conditions and skipping the required validation when the element is hidden or read-only.

<el-image loading="lazy" :preview-src-list="['/img/logicalControlle1.png']" src="/img/logicalControlle1.png"/>

## read-only

Specifying whether a field is read-only based on specific conditions.

<el-image loading="lazy" :preview-src-list="['/img/logicalControlle2.png']" src="/img/logicalControlle2.png"/>

## Logical controller operator

[Click here for the implementation logic](https://github.com/Liberty-liu/Everright-formEditor/blob/main/packages/hooks/use-logic/index.js)

|                         Field                         | Equal | Not equal | Contains | Not contain | Greater than | Greater than or equal to | Less than | Less than or equal to | Between | Equal to one of | Not equal to one of | Belong to one of | Not belong to one of| Empty | Not empty |
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
