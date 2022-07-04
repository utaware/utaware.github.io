import { arraySidebar } from 'vuepress-theme-hope'

export const language = arraySidebar([
  {
    text: '语言',
    icon: 'language',
    prefix: '/language/',
    children: [
      { text: 'yaml', link: 'yaml' },
      { text: 'markdown', link: 'markdown' },
      { text: 'javascript', link: 'javascript' },
      { text: 'ECMAcript', link: 'ECMAcript' },
    ]
  }
])

export const ECMAcript = arraySidebar([
  {
    text: 'javascript',
    prefix: '/language/javascript/',
    children: [
      { text: 'yaml', link: 'yaml' },
      { text: 'markdown', link: 'markdown' },
      { text: 'javascript', link: 'javascript' },
      { text: 'ECMAcript', link: 'ECMAcript' },
    ]
  }
])
