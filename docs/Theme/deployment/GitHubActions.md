---
title: GitHub Actions
date: 2020-05-29
---
# 使用 GitHub Actions 自动部署博客
## 创建Token

## 设置 Secrets
后面部署的 Action 需要有操作你的仓库的权限，因此提前设置好 GitHub personal access token（PAT个人访问令牌）。
授予权限的时候只给 `repo` 权限即可。
::: warning
令牌名字一定要命名为 `ACCESS_TOKEN`，这是后面的 `Action` 需要用的。
:::


