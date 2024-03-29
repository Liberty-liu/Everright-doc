---
outline: deep
---
# 关于编辑器

## 编辑器的组成区域
<el-image loading="lazy" :preview-src-list="['/img/abouteditor.png']" src="/img/abouteditor.png"/>
### 1.字段面板(Fields panel)
字段面板提供两种方式添加字段：点击（表单画板会自动滚动到最底部）和拖拽（生成行或列），将一个字段添加到画板中后，它会被自动选中，配置面板会显示该字段的所有属性，并且可以轻松地更改这些属性，例如字段名称、字段类型、选项等。此外，还可以在属性面板中设置该字段的验证规则、默认值和布局等其他属性。


<el-image loading="lazy" :preview-src-list="['/img/fieldsPanel.png']" src="/img/fieldsPanel.png"/>
### 2.表单画板(canvas panel)
表单画板是Everright-formEditor的主要工作区域，提供了一种直观的方式来构建和设计表单，在表单画板中，可以使用拖放和单击等交互式操作，轻松地添加、删除和移动表单字段

<el-image loading="lazy" :preview-src-list="['/img/canvasPanel.png']" src="/img/canvasPanel.png"/>

### 3.属性面板(config panel)
用于配置字段属性的区域。当添加或选择表单中的一个字段时，该字段的属性将在属性面板中显示，以便能够轻松地更改和配置这些属性。包括常规选项（例如字段名称、字段类型、必填性等）、验证选项（例如最小值、最大值）和布局选项（例如字段宽度、标签位置、外边距等）。
通过属性面板，能够快速设置和更改字段的各种属性。

<el-image loading="lazy" :preview-src-list="['/img/configPanel.png']" src="/img/configPanel.png"/>

### 4.面包屑
目前没有将树形结构体现出来，但是可以使用面包屑来定位当前字段的位置，并选择其父级。通过单击面包屑中的父级字段，可以选择整个块或分组，以查看其属性并对其进行更改。

<el-image loading="lazy" :preview-src-list="['/img/breadcrumb.png']" src="/img/breadcrumb.png"/>

### 5.选区(selection)
选区是Everright-formEditor中非常重要的一个概念，当选中字段时，会在画布面板上被高亮显示。

选区提供了以下功能：

移动、复制、删除、调整大小、选择父级、组合和拆分(在table容器中，会有插入行/列或合并行/列以及拆分行列)


<el-image loading="lazy" :preview-src-list="['/img/selection.png']" src="/img/selection.png"/>

### 6.操作区域
操作区域提供一些常见的功能按钮，包括清空、保存、预览和多语言等按钮，也可以传入slot
