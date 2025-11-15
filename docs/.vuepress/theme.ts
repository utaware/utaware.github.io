import { hopeTheme } from 'vuepress-theme-hope'

import navbar from './navbar'

console.log('includes:', __dirname)

export default hopeTheme({
  hostname: 'https://github.com/utaware',

  author: {
    name: 'utaware',
    url: 'https://github.com/utaware',
  },

  logo: '/logo.png',

  repo: 'https://github.com/utaware/utaware.github.io',

  docsDir: 'docs',

  // navbar
  navbar: navbar,

  // sidebar
  sidebar: false,

  footer: 'Theme by vuepress-theme-hope',

  displayFooter: true,

  pageInfo: ['Author', 'Original', 'Date', 'Category', 'Tag', 'ReadingTime'],

  blog: {
    description: '一个前端开发者',
    intro: '/intro.html',
    avatar: 'https://avatars.githubusercontent.com/u/27495168?v=4',
    medias: {},
  },

  encrypt: {
    config: {
      '/guide/encrypt.html': ['1234'],
    },
  },

  plugins: {
    blog: {
      excerptLength: 0,
    },
    icon: {
      assets: 'fontawesome'
    }
  },

  markdown: {
    // enableAll: true,
    codeTabs: true,
    tabs: true,
    demo: true,
    align: true,
    footnote: true,
    vPre: true,
    // 导入文件
    include: {},
    mermaid: true,
    revealjs: true
  },
})
