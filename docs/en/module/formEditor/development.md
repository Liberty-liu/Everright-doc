---
outline: deep
---
# Development Guide

## Prerequisites

- Node.js >= 16
- pnpm >= 7.9.5

## Install dependencies
```shell
pnpm install
```

## init
Before starting the development, you need to understand that the local environment is not a pure frontend project. There will be some simple CRUD operations that require executing shell to pre-create a SQLite local database file and a folder for uploading files.
```shell
pnpm run init
```

## Run
```shell
pnpm run dev
```

## Run server
```shell
pnpm run dev:server
```


## Build
```shell
pnpm run build
```
