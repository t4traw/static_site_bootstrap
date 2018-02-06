# StaticSiteBootstrap

![](https://img.shields.io/badge/middleman-4.2.1-blue.svg?style=flat-square)
![](https://img.shields.io/badge/webpack-3.10.0-blue.svg?style=flat-square)

静的サイトを作るベースとなるMiddlemanとWebpackのテンプレートです。forkしてnormalizeや普段使うcssフレームワークなどを追加すれば、サクっと土台が作れます✌️

## 🌱 Require

- ruby
- nodejs

## 📛 Version

- middleman(4.2.1)
- webpack(3.10.0)

Other dependencies are look at Gemfile and package.json.

## ⚡ Initialize

```
$ mkdir YOUR_SITE_NAME && cd $_
$ gem i middleman -v 4.2.1
$ middleman init -T t4traw/static_site_bootstrap
```

## 🛠 Develop

```
$ bundle exec middleman
```

## 🚀 Build

```
$ bundle exec middleman build
```
