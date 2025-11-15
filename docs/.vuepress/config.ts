import { defineUserConfig } from "vuepress"
import { viteBundler } from '@vuepress/bundler-vite'
import { path } from "@vuepress/utils"

import theme from "./theme"

export default defineUserConfig({
  lang: "zh-CN",
  title: "utaware",
  description: "utaware's blog",
  base: "/",
  theme,
  alias: {
    "@WebRailRange": path.resolve(__dirname, "./components/WebRailRange.vue")
  },
  pagePatterns: [
    "**/*.md",
    "!*.snippet.md",
    "!.vuepress",
    "!node_modules"
  ],
  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),
})
