<h1 align="center">
  Vue LazyLoadTabs Component
</h1>

#### LazyLoadTabs 组件调用

`组件功能介绍`

```bash
  可以根据传入文件路径动态加载的标签页
```

`组件的引用`

```bash
# main.js
import LazyLoadTabs from '@/components/LazyLoadTabs';
Vue.use(LazyLoadTabs);
```

`组件参数API`

- v-model="String | 默认选中组件的title" 
  - 示例： v-model = "测试页A" 
    - 默认选中必传
- type="String | 选项卡风格 card,border-card"
  - 示例 type="card"
    - 可不传，默认风格为基础样式
- position="String | 选项卡所在位置 top,right,bottom,left"
  - 示例 position="top" 
    - 可不传，默认位置为top
- destroyOnClose="Boolean | 是否销毁隐藏状态选项卡的子组件"
  - 示例 destroyOnClose = true 
    - 可不传，默认为false
- tab-click{Function|自定义事件，tab 被选中时触发，参数是选中的标签 tab 实例 和 包装后的事件对象}
  - 示例在下面js内的@tab-click="TabClick"
- tabMenus{Array|选项卡的菜单数据}
  - 示例 下面js代码内的menus

`示例代码`

```bash
# template
<template>
  <LazyLoadTabss v-model="activeName" @tab-click="TabClick" @input="ckinput" :type="type" :position="position" :destroyOnClose="destroyOnClose" :tabMenus="menus"/>
</template>

# js
export default {
  data() {
    return {
      activeName: '测试页A', // String | 默认选中的标签页
      menus: [
        {
          title: '测试页A', // String | 选项卡title，必传
          path: 'Navigations/Tabs/TabsPage/TabsPageA', // 展示文件的路径, 默认为pages文件下的路径， 必传
          disabled: true, //Boolean | 禁用选项卡默认为false, 选传
          params: { // Object | 传递给展示文件的参数,可在对应页面内以props接收，选传
            type: 1
          },
          on: { // Object | 给展示文件添加自定义事件，在展示页面内通过 this.$emit('myClallback') 触发，可添加多个
            myClallback: (list) => {
              console.log('list--', JSON.stringify(list))
            },
            myClallbackB: (list) => {
              console.log('list--', JSON.stringify(list))
            }
          }
        },
      ]
    }
  }, 
  methods: {
    // 触发tab-click
    TabClick (e) {
      console.log(e)
    },
    // 触发@input
    ckinput (e) {
      console.log(e)
    }
  }
};
```
`被引用页面示例代码`
```bash
# js
  export default {
    // 接受携带的参数 type
    props: {
      type: Number
    },
    name: 'TabsPageC',
    mounted () {
      // params 携带的参数
      console.log(this.type)
      // on 添加的事件
      this.$emit('myClallback', '测试myClallback的回调')
      this.$emit('myClallbackB', '测试myClallbackB的回调')
    },
  }
};
```