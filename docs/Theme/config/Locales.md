---
title: 多语言配置
date: 2020-05-29
sidebar: 'auto'
---
::: warning
由于某些原因，导航栏分类、标签、文档、时间轴功能没有进行多语言适配，因此博客项目不能进行多语言配置，但是还是可以设置博客项目的默认语言，另外本主题支持您自定义默认显示文本。
:::

## ***主题语言支持***
| 名称   | 语言代码                    |
|------|-------------------------|
| 简体中文 | `zh-CN`、`zh-SG`         |
| 繁体中文 | `zh-HK`、`zh-MO`、`zh-TW` |
| 日语	  | `ja-JP`                 |
| 韩语   | `ko-KR`                 |
| 英语   | `en-US`                 |

## ***单一语言配置***
### ***配置默认语言***
`vuepress` 的默认语言代码为 `en-US`，所以本主题默认配置也为 `en-US`，如果您需要改成简体中文，需要通过站点语言配置来修改：
```javascript
// .vuepress/config.js

module.exports = {
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  }
}
```
### ***修改显示语言***
如果您觉得主题内置的默认术语不符合您的喜好，您还可以这样修改：
```javascript
// .vuepress/config.js

module.exports = {
  locales: {
    '/': {
      customLocales: {
        homeBlog: {
          article: '美文',      // 默认 文章
          tag: '标识',          // 默认 标签
          category: '类别',     // 默认 分类
          friendLink: '友链'    // 默认 友情链接
        },
        pagation: {
          prev: '上一页',
          next: '下一页',
          go: '前往',
          jump: '跳转至'
        }
      }
    }
  }
}
```
## ***多语言配置***
### ***配置站点语言***
通过站点配置增加语言选项，导航栏会根据站点配置自动生成`语言选择`按钮。
```javascript
// .vuepress/config.js

module.exports = {
  locales: {
    '/': {
      lang: 'zh-CN'
    },
    '/en/': {
      lang: 'en-US'
    }
  }
}
```
### ***修改显示语言***
站点拥有多种语语言时，上面修改默认术语的方法依旧有效。
```javascript
// .vuepress/config.js
module.exports = {
  locales: {
    '/': {
      customLocales: {
        homeBlog: {
          article: '美文',      // 默认 文章
          tag: '标识',          // 默认 标签
          category: '类别',     // 默认 分类
          friendLink: '友链'    // 默认 友情链接
        }
      }
    },
    '/en/': {
      customLocales: {
        homeBlog: {
          article: 'Articles',    // 默认 Articles
          tag: 'Tags',            // 默认 Tags
          friendLink: 'Friends'   // 默认 Friend Links
        }
      }
    }
  }
}
``` 

### ***主题多语言***
本主题支持导航栏、侧边栏的多语言配置，配置方法如下：
```javascript
// .vuepress/config.js

module.exports = {
  themeConfig: {
    locales: {
      '/': {
        navConfig: {
            
        },
        sidebar: {
            
        }
      },
      '/en/': {
        navConfig: {

        },
        sidebar: {

        }
      }
    }
  }
}
```