---
outline: deep
---
# About the filter

## The constituent region of the filter
Filters work by providing data from four interfaces, refer to the picture
<el-image loading="lazy" :preview-src-list="['/img/aboutfilter.png']" src="/img/aboutfilter.png"/>

### 1.API options
This interface is used to obtain data for triggers and operators. By calling this interface, you can obtain available triggers and operators. For example, get the available trigger options, such as text, numbers, dates, and so on, as well as the operators supported by each trigger, such as equal, not equal, greater than, less than, and so on.

### 2.API conditions
This interface is used to obtain data for field values (such as pull and cascade). By calling this interface, you can get data for drop-down lists, cascade selectors, and other field values. This data can be static, a pre-defined list of options, or dynamic, a list of options generated based on specific conditions. Getting the data of the field values can provide optional values for the filter's condition setting.

### 3.API props
This interface is used to get data for triggers and operators that restrict properties. Limiting attributes are properties that constrain filtering conditions, such as filtering within a specific date range, limiting times, and so on. By calling this interface, you can get a list of available triggers and operators, as well as configuration options related to restricted properties. This data sets and configures the conditions that limit the properties.

### 4.API propValues
This interface is used to get the value of the restriction attribute. By calling this interface, you can get a list of optional values for the restricted property. These values can be static, a list of predefined options, or a list of dynamic values generated based on specific conditions. Getting a list of values for a restricted property provides an optional range of values for the filter's condition Settings.
