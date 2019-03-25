# StaticSiteBootstrap

![](https://img.shields.io/badge/middleman-4.3.3-blue.svg?style=flat-square)
![](https://img.shields.io/badge/webpack-4.17.1-blue.svg?style=flat-square)

静的サイトを作るベースとなるMiddlemanとWebpackのテンプレートです。forkしてnormalizeや普段使うcssフレームワークなどを追加すれば、サクっと土台が作れます✌️

## 🌱 Require

- ruby
- nodejs

## 📛 Version

- middleman(4.3.3)
- webpack(4.17.1)

Other dependencies are look at Gemfile and package.json.

### Library update

```
$ bundle update
$ yarn upgrade-interactive
```

## ⚡ Initialize

```
$ mkdir YOUR_SITE_NAME && cd $_
$ gem i middleman -v 4.3.3
$ middleman init -T t4traw/static_site_bootstrap
$ mv gitignore .gitignore
$ yarn install
```

## 🛠 Develop

```
$ middleman server
```

## 🚀 Build

```
$ middleman build
```

## 