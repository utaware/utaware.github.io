import { hopeTheme } from 'vuepress-theme-hope'

import navbar from './navbar'

console.log('includes:', __dirname)

export default hopeTheme({
  hostname: "https://github.com/utaware",

  author: {
    name: "utaware",
    url: "https://github.com/utaware",
  },

  iconAssets: "iconfont",

  logo: "/logo.png",

  repo: "https://github.com/utaware/utaware.github.io",

  docsDir: "docs",

  // navbar
  navbar: navbar,

  // sidebar
  sidebar: false,

  footer: "Theme by vuepress-theme-hope",

  displayFooter: true,

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  blog: {
    description: "一个前端开发者",
    intro: "/intro.html",
    avatar: "https://avatars.githubusercontent.com/u/27495168?v=4",
    roundAvatar: true,
    medias: {}
  },

  encrypt: {
    config: {
      "/guide/encrypt.html": ["1234"],
    },
  },

  plugins: {

    blog: {
      excerptLength: 0,
    },

    mdEnhance: {
      // 一键启用md-enhance插件的所有功能
      // enableAll: true,
      // 选项卡
      tabs: true,
      // 代码块分组
      codetabs: true,
      // 代码演示
      demo: true,
      // 段落对齐
      align: true,
      // 脚注
      footnote: true,
      // v-pre
      vPre: true,
      // 导入文件
      include: {},
      // mermaid
      mermaid: true,
      // 幻灯片
      revealJs: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});
