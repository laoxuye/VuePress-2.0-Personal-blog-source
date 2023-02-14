import { defineClientConfig } from "@vuepress/client";
import index from "./components/index.vue";
//客户端文件
export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.component("Index", index);
  },
  setup() {},
  rootComponents: [],
});
