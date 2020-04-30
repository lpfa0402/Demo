export default {
  data: [
    {
      title: '测试页A',
      path: 'Navigations/Tabs/TabsPage/TabsPageA', // 展示文件的路径
      params: {
        type: 1,
        canshu: '666'
      }
    },
    {
      title: '测试页B',
      path: 'Navigations/Tabs/TabsPage/TabsPageB',
      disabled: true,
      params: {
        type: 2
      }
    },
    {
      title: '测试页C',
      path: 'Navigations/Tabs/TabsPage/TabsPageC',
      params: {
        type: 3,
        canshu: '777'
      },
      on: {
        myClallback: (list) => {
          console.log('list--', JSON.stringify(list))
        },
        myClallbackB: (list) => {
          console.log('list--', JSON.stringify(list))
        }
      }
    }
  ]
}
