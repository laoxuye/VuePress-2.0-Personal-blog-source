import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";

//配置文件;
export default defineUserConfig({
  base: "/VuePress-2.0-Personal-blog/",
  head: [["link", { rel: "icon", href: "/svg/favicon.svg" }]],
  lang: "zh-CN",
  title: "适度博客",
  description: "这是我的第一个 博客 站点——适度博客",
  theme: defaultTheme({
    //头部
    navbar: [
      { text: "知识积累", link: "/knowledge/" }, // 内部链接 以docs为根目录
      { text: "技术积累", link: "/technology/" },
      { text: "文章周报", link: "/weekly/" },
      // 下拉列表
      {
        text: "GitHub",
        children: [
          {
            text: "我的项目",
            link: "https://github.com/laoxuye",
          },
        ],
      },
    ],
    //头部 logo
    logo: "svg/favicon.svg",
    //侧边栏
    sidebar: {
      "/knowledge/": [
        {
          text: "JavaScript",
          link: "/knowledge/JS/",
          children: [
            {
              text: "基本语法",
              link: "/knowledge/JS/basicSyntax/",
              children: [
                {
                  text: "数据类型和值",
                  collapsible: true,
                  children: [
                    "/knowledge/JS/basicSyntax/one/1",
                    "/knowledge/JS/basicSyntax/one/2",
                    "/knowledge/JS/basicSyntax/one/3",
                  ],
                },
                {
                  text: "表达式",
                  collapsible: true,
                  children: [
                    "/knowledge/JS/basicSyntax/two/1",
                    "/knowledge/JS/basicSyntax/two/2",
                    "/knowledge/JS/basicSyntax/two/3",
                    "/knowledge/JS/basicSyntax/two/4",
                  ],
                },
                {
                  text: "运算符",
                  collapsible: true,
                  children: [
                    "/knowledge/JS/basicSyntax/three/1",
                    "/knowledge/JS/basicSyntax/three/2",
                    "/knowledge/JS/basicSyntax/three/3",
                    "/knowledge/JS/basicSyntax/three/4",
                  ],
                },
              ],
            },
            {
              text: "内置对象",
              link: "/knowledge/JS/builtInObject/",
              children: [
                {
                  title: "数据类型和值",
                  collapsible: true,
                  children: [
                    "/knowledge/JS/builtInObject/one/1",
                    "/knowledge/JS/builtInObject/one/2",
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  }),

  plugins: [
    //搜索框
    docsearchPlugin({}),
  ],
});
