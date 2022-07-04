import { defineUserConfig } from "vuepress"

import theme from "./theme"

export default defineUserConfig({
  lang: "zh-CN",
  title: "utaware",
  description: "utaware's blog",
  base: "/",
  theme,
  pagePatterns: [
    "**/*.md",
    "!*.snippet.md",
    "!.vuepress",
    "!node_modules"
  ]
})
