---
title: 图标
date: 2020-05-29
---

## ***内置图标***

### ***使用方法***

引用图标时，需在图标名称前加上 `icon-`，如使用 `blog` 图标作为导航栏菜单按钮，需引用为 `icon-blog`。

### ***图标列表***
您可以使用主题的内置图标，所有内置的图标如下所示：

<IconList></IconList>


## ***外部图标***

主题支持使用[iconfont-阿里巴巴矢量图标库](https://www.iconfont.cn/)引入图标。引入方法如下：
1. 将图标库中的图标下载到本地，并将其中的 `iconfont.css` 、 `iconfont.ttf` 、 `iconfont.woff` 和 `iconfont.woff2` 拷贝到 `.vuepress/public/fonts` 目录下。
2. `.vuepress` 目录下建立 `enhanceApp.js`， 并在该文件中引入第1步拷贝的 `iconfont.css` 文件。
```javascript
// .vuepress\enhanceApp.js

import './public/fonts/iconfont.css'
```

以下为引入外部字体的目录结构：

```
.
├─ your project directory
├─ README.md
├─ .vuepress
│  ├─ public
│  │  ├─ fonts
│  │  │  ├─ iconfont.css
│  │  │  ├─ iconfont.ttf
│  │  │  ├─ iconfont.woff
│  │  │  └─ iconfont.woff2
│  │  └─ ... 
│  ├─ ...
│  ├─ enhanceApp.js
│  └─ config.js
├─ ...
└─ package.json
```
