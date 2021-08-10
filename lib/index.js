// 参考地址：https://www.icode9.com/content-4-815664.html
// 引入loader-utils工具包
const loaderUtils = require("loader-utils")
// 引入schema-utils下的validate方法
const { validate } = require("schema-utils")

// loader暴露的函数，其中source就是传入的文件资源或者上一个loader处理后的内容
module.exports = function (source) {
  // 获取传入的options（就是在配置文件中填写的options选项）
  const options = loaderUtils.getOptions(this) || {}
  // 异步，在callback中返回结果
  let callback = this.async()

  // 校验模板
  const schema = {
    type: "object",
    properties: {
      author: {
        type: "string"
      },
      date: {
        type: "boolean"
      },
      copyright: {
        type: "string"
      },
    }
  }

  // 对options参数进行模式校验
  validate(schema, options, {
    name: 'roninwz-loader',
  });

  const date = new Date().toLocaleDateString()

  // 对结果进行缓存
  this.cacheable && this.cacheable()

  // 判断是否有日期
  if (options.date) {
    callback(null,
      `/**
 * @ Author: ${options.author}
 * @ Date: ${date}
 * @ Copyright: ${options.copyright}
 * **/
${source}`)
  } else {
    callback(null,
      `/**
   * @ Author: ${options.author}
   * @ Copyright: ${options.copyright}
   * **/
${source}`)
  }
}