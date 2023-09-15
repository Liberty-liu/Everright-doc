---
outline: deep
---
# 开发指南

## 1.环境要求
在开始开发之前，请确保开发环境满足以下要求：

- Node.js >= 16
- pnpm >= 7.9.5

## 2.command

### 安装依赖
```shell
pnpm install
```

### 初始化项目
进行开发之前，需要先了解一下本地环境不是一个纯前端的项目，会有一些简单的curd，需要执行shell预先创建一个sqlite的本地数据库文件和上传文件的文件夹
```shell
pnpm run init
```

### build ckeditor
```shell
pnpm run build:ckeditor5
```

### 运行项目
```shell
pnpm run dev
```

### 运行server项目
```shell
pnpm run dev:server
```


### 构建项目
```shell
pnpm run build
```

## 3.URL

### Brower

| URL                                             | 说明              | Back-end           |
|-------------------------------------------------|-----------------|--------------------|
| /formEditor                                     | erFormEditor组件  |                    |
| /formEditorConfig                               | erFormConfig组件  |                    |
| /formEditor/object/objList                      | 表单列表`新建、删除、修改`  | :white_check_mark: |
| /formEditor/object/objEdit/:objid               | 编辑表单`进入编辑器对表单进行字段编辑` | :white_check_mark: |
| /formEditor/object/:objid/actionList            | 记录表单下录入的数据`新建、删除、修改`      | :white_check_mark: |
| /formEditor/object/:objid/actionEdit/:actionid? | 录入表单数据           | :white_check_mark: |

### Server

| URL                                      | 说明           | Method |
|------------------------------------------|--------------|-------|
| /Everright-api/lowCode/obj               | 获取全部表单       | GET   |
| /Everright-api/lowCode/obj               | 创建表单         | POST  |
| /Everright-api/lowCode/obj/:objid        | 获取表单         | GET   |
| /Everright-api/lowCode/obj/:objid        | 修改表单         | PUT   |
| /Everright-api/lowCode/obj/:objid        | 删除表单         | DELETE |
| /Everright-api/lowCode/obj/:objid/action | 获取表单下录入的全部数据 | POST  |
| /Everright-api/lowCode/obj/:objid/create | 创建数据         | POST  |
| /Everright-api/lowCode/obj/:objid/:id    | 获取录入数据       | GET   |
| /Everright-api/lowCode/obj/:objid/:id    | 修改录入数据       | PUT   |
| /Everright-api/lowCode/obj/:objid/:id    | 删除录入数据       | DELETE |
| /Everright-api/lowCode/uploads           | 上传文件         | POST  |

## 4.Database

::: tip
如有对数据库不太熟悉又需要了解这块的逻辑建议稍微掌握一些[express](https://github.com/expressjs/express)和有关数据库的知识。

依赖[sqlite](https://github.com/sqlite/sqlite)数据库，ORM库使用[better-sqlite3](https://github.com/WiseLibs/better-sqlite3)
:::

::: tip
Windows环境需要自行安装sqlite

Mac自带sqlite
:::


为什么会在开发环境搭建一个具有数据库的功能呢？为了方便开发，编辑器生成数据之后需要在预览器预览进行功能检查，往往需要copy一份json然后给到预览器，如果发现不对，需要再次重复这个事情，然而这是一个极其繁琐的事情，因此也就有了一个数据库来做这个事情，提升开发效率，无需关注这些琐碎的事情。在多数情况下不需要修改后端代码就可以正常运行！！！

### Table
一共有三张表进行支持这个服务，分别是object、object_table、field(目前没有应用)

#### 建表语句
```shell [pnpm]
CREATE TABLE object (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  content TEXT,
  create_timestamp DEFAULT (unixepoch('now')),
  update_timestamp DEFAULT (unixepoch('now'))
)`

CREATE TABLE object_table (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  obj_id TEXT NOT NULL,
  content TEXT,
  create_timestamp DEFAULT (unixepoch('now')),
  update_timestamp DEFAULT (unixepoch('now'))
)

CREATE TABLE field (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  obj_id TEXT NOT NULL,
  content TEXT,
  create_timestamp DEFAULT (unixepoch('now')),
  update_timestamp DEFAULT (unixepoch('now'))
)
```

#### 1.object表

> 创建的表单会存入在这张表

| 字段 | 说明                  |
|----|---------------------|
|  id  | 自增id，对应objid                |
|  name  | 表单名称                |
|  content  | 表单数据，编辑器生成的json存入此处 |
|  create_timestamp  | 创建时间                |
|  update_timestamp  | 修改时间                |

#### 2.object_table表

> 表单记录的数据会存入这张表

| 字段 | 说明    |
|----|-------|
|  id  | 自增id  |
|  obj_id  | 表单objid |
|  content  | 记录的数据 |
|  create_timestamp  | 创建时间  |
|  update_timestamp  | 修改时间  |

#### 3.field表

> 所有字段都会存入这张表，但是目前没有使用到，最初开发的时候结合[Everright-filter](/filter/introduction)开发过一个列表的组件，大致的功能有字段在列表的排序以及展示哪些字段，都是基于这张表的数据进行开发，在后期的迭代中这个自定义列表的功能被放弃了，但是这个表依旧被保留了下来。

| 字段 | 说明      |
|----|---------|
|  id  | 自增id    |
|  obj_id  | 表单objid |
|  content  | 表单字段    |
|  create_timestamp  | 创建时间    |
|  update_timestamp  | 修改时间    |
