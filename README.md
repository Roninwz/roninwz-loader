# roninwz-loader

自定义的一个添加注释的 loader

## 安装

`npm i roninwz-loader -D`

## 配置选项

```js
options: {
  author: "roninwz", // 作者
  date: true, // 是否标志日期
  copyright: "roninwz", // 版权
}
```

## webpack 中使用

```js
const path = require("path");
module.exports = {
  target: "node",
  mode: "development",
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        // 配置loader
        test: /\.js$/,
        use: [
          {
            loader: "roninwz-loader",
            options: {
              author: "roninwz", // 作者
              date: true, // 是否标志日期
              copyright: "roninwz", // 版权
              filename: path.resolve(__dirname), // 暂时无用
            },
          },
        ],
        exclude: /node_modules/, // 忽略node_modules文件夹下的js
      },
    ],
  },
};
```

## vue-cli3 中 vue.config.js 使用

```js
// 使用 roninwz-loader
  configureWebpack: (config) => {
    config.module.rules.push({
      test: /\.js$/,
      use: [{
        loader: 'roninwz-loader',
        options: {
          author: "roninwz", // 作者
          date: true, // 是否标志日期
          copyright: "roninwz", // 版权
          filename: path.resolve(__dirname), // 暂时无用
        }
      }],
      exclude: /node_modules/, // 忽略node_modules文件夹下的js
    })
  },
```
