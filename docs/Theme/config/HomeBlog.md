---
title: 博客首页配置
date: 2020-05-29
sidebar: 'auto'
---
![HomeBlog](https://img-blog.csdnimg.cn/86f28fe665fe44d5a3b414d2ba9d1ebf.png#pic_center)
## ***Front Matter 设置***
### ***类型：type***
首先，配置当前页`home`为`true`：
```yaml
---
home: true
---
```
然后，设置此页面类型。博客类型可以通过`$page.frontmatter`或`$themeConfig.type`配置，且前者优先级更高。
```yaml
---
home: true
type: HomeBlog
---
```

### ***标题：heroText***
可以通过`heroText`配置当前页页面中间的标题。
>1. 当`heroText`设置为`null`时，`heroText`不显示；
>2. 当`heroText`设置为空或不设置时，`heroText`显示为[原生配置](/docs/Theme/config/native.md#title)的`title`。

### ***标语：tagline***
可以通过`tagline`配置当前页页面中间的副标题（页面描述）。
>1. 当`tagline`设置为`null`时，`tagline`不显示；
>2. 当`tagline`设置为空或不设置时，`tagline`显示为[原生配置](/docs/Theme/config/native.md#description)的`description`。
```yaml
---
home: true
type: HomeBlog
heroText: My Blog
tagline: A Beautiful Blog Style
---
```

### ***横幅：heroImage***
`heroImage`可以为服务器本地图片，也可以为网络图片的url。一般`heroImage`带有鲜明特色，一般为网站logo或网站名称+网站简介。
>如果您的`heroImage`设置的图片具有网站标题，则可以设置 `heroText`为`null`以使标题不再显示；`tagline`设置相同。
>
```yaml
---
home: true
type: HomeBlog
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

### ***背景：bgImage***
通过`$frontmatter.bgImage`设置首页的背景图片，如果想改变 `$frontmatter.bgImage` 的风格，可以设置值 `$frontmatter.bgImageStyle` 来实现想要的样式，
```yaml
---
home: true
type: HomeBlog
bgImage: '/bg.png'
bgImageStyle: {
    height: '350px'
}
---
```
## ***themeConfig***

### ***authorAvatar***
通过[主题配置](/docs/Theme/config/theme.md#authoravatar)中的`$themeConfig.authorConfig.authorAvatar`设置博客首页右侧信息栏的头像。

### ***friendLink***
通过[主题配置](/docs/Theme/config/theme.md#friendlink)中的`$themeConfig.authorConfig.friendLink`添加博客首页右侧信息栏的友情链接。