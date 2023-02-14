export const data = JSON.parse("{\"key\":\"v-003c11ac\",\"path\":\"/knowledge/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Hello 你好，朋友\",\"slug\":\"hello-你好-朋友\",\"link\":\"#hello-你好-朋友\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"knowledge/README.md\"}")

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
