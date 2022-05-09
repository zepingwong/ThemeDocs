---
title: 看板娘
date: 2020-05-29
---


## Details

> Vuepress 看板娘插件

|使用位置|值|
|-|-|
|plugin name|@vuepress-reco/vuepress-plugin-kan-ban-niang|
|component name|KanBanNiang（自动出现在页面中，无需添加额外代码）|

## Buttons

|按钮|作用|默认提示语|
|-|-|-|
|home|回到博客主页|心里的花，我想要带你回家。|
|message|显示主人寄语|'欢迎来到 ' + 您的站点名称（$site.title）|
|theme|更换模型主题|好吧，希望你能喜欢我的其他小伙伴。|
|close|关闭看板娘|你知道我喜欢吃什么吗？痴痴地望着你。|
|info|跳转插件github|想知道关于我的更多信息吗？|

## Options

> 以下为插件注入时的参数。

### Attributes

|参数|说明|类型|默认值|可选值|
|-|-|-|-|-|
|theme|默认模型主题|Array|['blackCat', 'whiteCat', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'miku', 'z16']|-|
|clean|是否开启clean模式(隐藏所有按钮)|Boolean|false|true/false|
|messages|按钮提示语|Object|{ welcome: '欢迎来到 ' + 您的站点名称（$site.title）, home: '心里的花，我想要带你回家。', theme: '好吧，希望你能喜欢我的其他小伙伴。', close: '你知道我喜欢吃什么吗？痴痴地望着你。' }|-|
|messageStyle|自定义消息框样式|Object|{ right: '68px', bottom: '190px' }|-|
|modelStyle|自定义模型样式|Object|{ right: '90px', bottom: '-20px', opacity: '0.9' }|-|
|btnStyle|自定义按钮样式|Object|{ right: '90px', bottom: '40px' }|-|
|width|模型宽度|Number|150|-|
|height|模型高度|Number|220|-|

## About

- 参考插件: [@Qi](https://github.com/QiShaoXuan) https://github.com/QiShaoXuan/vuepress-plugin-cat
- 模型库： [@Qi](https://github.com/QiShaoXuan) https://github.com/QiShaoXuan/live2DModel
- 模型加载失败时会自动隐藏
- 加载静态资源速度不稳定
- 想使用本插件之外的其他模型可以将插件下载到本地引入更换模型url
