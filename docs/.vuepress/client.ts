import { defineClientConfig } from "@vuepress/client"

import test from "./components/test.vue"

export default defineClientConfig({
  enhance: ({ app, router, siteData }) => {
    app.component("test", test)
  },
})
