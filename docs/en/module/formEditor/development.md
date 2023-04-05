---
outline: deep
---
# 开发指南

## 环境要求
在开始开发之前，请确保开发环境满足以下要求：

- Node.js >= 16
- pnpm >= 7.9.5

## 安装依赖
```shell
pnpm install
```

## 初始化项目
进行开发之前，需要先了解一下本地环境不是一个纯前端的项目，会有一些简单的curd，需要执行shell预先创建一个sqlite的本地数据库文件和上传文件的文件夹
```shell
pnpm run init
```

## 运行项目
```shell
pnpm run dev
```

## 运行server项目
```shell
pnpm run dev:server
```


## 构建项目
```shell
pnpm run build
```
