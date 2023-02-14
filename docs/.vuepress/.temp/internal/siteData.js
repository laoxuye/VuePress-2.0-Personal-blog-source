export const siteData = JSON.parse("{\"base\":\"/VuePress-2.0-Personal-blog/\",\"lang\":\"zh-CN\",\"title\":\"适度博客\",\"description\":\"这是我的第一个 博客 站点——适度博客\",\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"/svg/favicon.svg\"}]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
