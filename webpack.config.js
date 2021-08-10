const path = require("path")
module.exports = {
  target: "node",
  mode: "development",
  entry: "./lib/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].js"
  },
  module: {
    rules: [{                  // 配置loader
      test: /\.js$/,
      use: [
        {
          loader: path.resolve(__dirname, './lib/index.js'),
          options: {
            author: 'roninwz',
            date: true,
            copyright: 'roninwz',
            filename: path.resolve(__dirname)
          }
        }
      ],
      exclude: /node_modules/
    }]
  }
}