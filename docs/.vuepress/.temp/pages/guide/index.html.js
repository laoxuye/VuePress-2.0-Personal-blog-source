export const data = JSON.parse("{\"key\":\"v-fffb8e28\",\"path\":\"/essay/\",\"title\":\"Hello 树先生\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"自我介绍\",\"slug\":\"自我介绍\",\"link\":\"#自我介绍\",\"children\":[{\"level\":3,\"title\":\"工作\",\"slug\":\"工作\",\"link\":\"#工作\",\"children\":[]},{\"level\":3,\"title\":\"好\",\"slug\":\"好\",\"link\":\"#好\",\"children\":[]}]}],\"git\":{},\"filePathRelative\":\"essay/README.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
