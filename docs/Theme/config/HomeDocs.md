---
title: 文档首页配置
date: 2020-05-29
sidebar: 'auto'
---
## ***类型：type***
首先，配置当前页`home`为`true`，然后设置此页类型为`HomeDocs`：
```yaml
---
home: true
type: HomeDocs
---
```

## ***标题：heroText***
可以通过`heroText`配置当前页页面中间的标题。
>1. 当`heroText`设置为`null`时，`heroText`不显示；
>2. 当`heroText`设置为空或不设置时，`heroText`显示为[原生配置](/docs/Theme/config/native.md#title)的`title`。

## ***标语：tagline***
可以通过`tagline`配置当前页页面中间的副标题（页面描述）。
>1. 当`tagline`设置为`null`时，`tagline`不显示；
>2. 当`tagline`设置为空或不设置时，`tagline`显示为[原生配置](/docs/Theme/config/native.md#description)的`description`。
```yaml
---
home: true
type: HomeDocs
heroText: My Docs
tagline: A Beautiful Docs Style
---
```

## ***横幅：heroImage***
`heroImage`可以为服务器本地图片，也可以为网络图片的url。一般`heroImage`带有鲜明特色，一般为网站logo或网站名称+网站简介。
>如果您的`heroImage`设置的图片具有网站标题，则可以设置 `heroText`为`null`以使标题不再显示；`tagline`设置相同。
>
```yaml
---
home: true
type: HomeDocs
heroImage: /hero.png
heroImageStyle: {
  maxWidth: '600px',
  width: '100%',
  display: block,
  margin: '9rem auto 2rem',
  background: '#fff',
  borderRadius: '1rem'
}
---
```
