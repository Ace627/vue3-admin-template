// 动态更改页面的 title（动态标题来自路由 meta 的 title 配置）

export default (title: string | undefined): void => {
  const settingStore = useSetting()
  const defaultTitle: string = import.meta.env.VITE_APP_TITLE || '似水流年'
  const dynamicTitle = `${title} - ${defaultTitle}`

  watch(
    () => settingStore.dynamicTitle,
    () => {
      document.title = settingStore.dynamicTitle ? dynamicTitle : defaultTitle
    },
    {
      immediate: true,
    },
  )
}
