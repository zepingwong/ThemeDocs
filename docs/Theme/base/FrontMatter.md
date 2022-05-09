---
title: Front Matter
date: 2020-05-29
---

一个完整的 `Front Matter` 案例：
```yaml
---
title: 一篇文章
date: '2019-08-08 08:00:00'
sidebar: 'auto'
categories:
 - category_1
 - category_2
tags:
 - tag_1
 - tag_2
keys:
 - 'password'
publish: true
---
```

## ***常用变量***
### ***title***
文章标题，放弃通过一级目录定义标题的方式，改在 `Front Matter` 中定义。
### ***date***
文章创建日期，格式 `2019-08-08` 或 `2019-08-08 08:08:08`。
### ***sidebar***
是否开启页面内侧边栏。
### ***categories***
所属分类。
### ***tags***
所属标签。
### ***keys***
文章加密密码。
### ***publish***
文章是否发布。
### ***sticky***
- **description**: 文章置顶。
- **type**: number
- **sort type**: 降序，可以按照 `1, 2, 3, ...` 来降低置顶文章的排列优先级

## ***其他变量***