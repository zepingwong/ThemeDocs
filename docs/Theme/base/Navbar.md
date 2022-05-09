---
title: 导航栏
date: 2020-05-29
---

## ***导航栏显示***
### ***全局配置***
通过主题配置，实现全局导航栏是否显示，配置方法见[主题配置]()。
### ***单页配置***
通过页面的Front Matter配置该页面是否显示导航栏（单页配置优先级高于主题配置），配置方法见[Front Matter]()。

## ***导航栏菜单***
主题导航栏内置了“主页”、“文档”、“分类”、“标签”、“时间轴”、“选择语言”六个菜单，可以通过主题配置显示不同菜单；并且主题配置中提供了添加用户自定义菜单的接口。

### ***主页***
当配置`themeConfig.navConfig.home`后，导航栏才会出现“主页”菜单，配置方法见[主题配置-navConfig](/docs/Theme/config/Theme.md#内置菜单按钮)。

### ***文档***
当配置`themeConfig.navConfig.docs`后，导航栏才会出现“文档”菜单，配置方法见[主题配置-navConfig](/docs/Theme/config/Theme.md#内置菜单按钮)。配置导航栏菜单后，文档文档列表展示的内容会根据文档封面内容自动生成，配置方法见[文档首页配置-封面](/docs/Theme/config/HomeDocs.md)。

### ***分类***
当配置`themeConfig.navConfig.category`后，导航栏才会出现“分类”菜单，配置方法见[主题配置-navConfig](/docs/Theme/config/Theme.md#内置菜单按钮)。。

### ***标签***
当配置`themeConfig.navConfig.tag`后，导航栏才会出现“标签”菜单，配置方法见[主题配置-navConfig](/docs/Theme/config/Theme.md#navconfig)。

### ***时间轴***
当配置`themeConfig.navConfig.timeline`后，导航栏才会出现“时间轴”菜单，配置方法见[主题配置-navConfig](/docs/Theme/config/Theme.md#navconfig)。

### ***选择语言***
站点配置多语言后，导航栏自动出现“选择语言”菜单，多语言配置方法见[多语言配置](/docs/Theme/config/Locales.md)。

### ***自定义菜单***
增加主题之外的导航栏菜单，请参考[主题配置-navConfig](/docs/Theme/config/Theme.md#navconfig)。