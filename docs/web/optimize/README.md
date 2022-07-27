---
date: 2022-07-09
category:
  - web
tag:
  - optimize
---

# 前端性能优化建议

1. 减少 HTTP 请求
2. 使用 HTTP2
3. 使用服务端渲染
4. 静态资源使用 CDN
5. 将 CSS 放在文件头部，JavaScript 文件放在底部
6. 使用字体图标 iconfont 代替图片图标
7. 善用缓存，不重复加载相同的资源
8. 压缩文件
9. 图片优化
10. 通过webpack按需加载代码，提取第三库代码，减少ES6转为ES5的冗余代码
11. 减少重绘重排
12. 使用事件委托
13. 使用 Web Workers
14. 不要覆盖原生方法
15. 降低 CSS 选择器的复杂性
16. 使用 flexbox 而不是较早的布局模型
17. 使用 transform 和 opacity 属性更改来实现动画

## 构建策略

*   **减少打包时间**：`缩减范围`、`缓存副本`、`定向搜索`、`提前构建`、`并行构建`、`可视结构`
*   **减少打包体积**：`分割代码`、`摇树优化`、`动态垫片`、`按需加载`、`作用提升`、`压缩资源`

## 实例

**分割**

> 配置`BundleAnalyzer`分析打包文件结构，找出导致体积过大的原因。

1. CDN: 对于第三方包可以搭配externals与webpackHtmlPlugin由CDN外部加载，
2. 异步加载: 对于路由/触发性功能单独打包为一个文件，使用时加载。
3. 按需引入: 分模块导入，只导入所需部分。

**http**

1. 使用http2

**压缩**

1. compression-webpack-plugin - gzip压缩
2. uglifyjs-webpack-plugin - js压缩
3. optimize-css-assets-webpack-plugin - CSS代码压缩
4. mini-css-extract-plugin - 提取为独立的CSS文件

**图标**

1. 合并图标成精灵图
2. 小尺寸图片转base64
3. 使用图标字体或svg替代图标

