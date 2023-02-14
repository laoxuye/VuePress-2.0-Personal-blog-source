export const themeData = JSON.parse("{\"navbar\":[{\"text\":\"知识积累\",\"link\":\"/knowledge/\"},{\"text\":\"技术积累\",\"link\":\"/technology/\"},{\"text\":\"文章周报\",\"link\":\"/weekly/\"},{\"text\":\"GitHub\",\"children\":[{\"text\":\"我的项目\",\"link\":\"https://github.com/laoxuye\"}]}],\"logo\":\"svg/favicon.svg\",\"sidebar\":{\"/knowledge/\":[{\"text\":\"JavaScript\",\"link\":\"/knowledge/JS/\",\"children\":[{\"text\":\"基本语法\",\"link\":\"/knowledge/JS/basicSyntax/\",\"children\":[{\"title\":\"数据类型和值\",\"collapsible\":true,\"children\":[\"/knowledge/JS/basicSyntax/one/1\",\"/knowledge/JS/basicSyntax/one/2\",\"/knowledge/JS/basicSyntax/one/3\"]}]},{\"text\":\"内置对象\",\"link\":\"/knowledge/JS/builtInObject/\",\"children\":[{\"title\":\"数据类型和值\",\"collapsible\":true,\"children\":[\"/knowledge/JS/builtInObject/one/1\",\"/knowledge/JS/builtInObject/one/2\"]}]}]}]},\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
