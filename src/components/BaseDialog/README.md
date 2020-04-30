<h1 align="center">
 Vue ASSBaseDialog Component
</h1>

#### ASSBaseDialog 组件调用

`组件功能介绍`

```bash
  可以放置各种内容的弹出对话框
```

`组件的引用`

```bash
# main.js
import ASSBaseDialog from '@/components/ASSBaseDialog';
Vue.use(ASSBaseDialog);
```

`组件参数API`
- visible = "Boolean | 是否显示 Dialog，支持 .sync 修饰符（组件内通过 this.$emit('update:visible', false)来实现子组件修改父组件的值）"
  - 示例： :visible.sync="visible"
    - 默认值： false
    - 可选值： true / false 
- closable = "Boolean | 是否显示右上角的关闭按钮"
  - 示例： closable=true
    - 默认值： true
    - 可选值： true / false
- destroyOnClose = "Boolean | 关闭时销毁 Dialog 里的子元素"
  - 示例： closable=false
    - 默认值： falase
    - 可选值： true / false
- title = "String | 标题"
  - 示例： title="标题"
    - 默认值： 空
    - 可选值： 所有String字符串
- width = "String | Dialog 的宽度"
  - 示例： width="20px"
    - 默认值 50%
    - 可选值： 所有String字符串
- modal = "Boolean | 是否显示遮罩层"
  - 示例： modal=true
    - 默认值 true
    - 可选值： true / false
- lockScroll = "Boolean | 是否在 Dialog 出现时将 body 滚动锁定"
  - 示例： lockScroll=true
    - 默认值 false
    - 可选值： true / false
- customClass = "String | 给Dialog添加自定义类名"
  - 示例： customClass="class"
    - 默认值 空
    - 可选值： 字符串类名
- containerStyle = "Object | 对话框外层容器的 style"
  - 示例： :containerStyle="{border: '#dedede 1px solid'}"
    - 默认值 空
    - 可选值： style样式
- maskClosable = "Boolean | 是否可以通过点击 modal 关闭 Dialog"
  - 示例： maskClosable=true
    - 默认值 false
    - 可选值： true / false
- open{Function|打开事件，没有参数}
- opened{Function|打开动画结束时的事件，没有参数}
- close{Function|关闭事件，没有参数}
- closed{Function|Dialog 关闭动画结束时的事件，参数是 visible}

`组件插槽`

- default{Dialog 的内容}
- title{Dialog 标题区的内容}

`示例代码`

```bash
# template
<template>
  <ASSBaseDialog customClass="class" @close="close" @open="open" @opened="opened" :visible.sync="visible" :closable="closable" :destroyOnClose="destroyOnClose" :title="title" :width="width" :modal="modal" :lockScroll="lockScroll" :maskClosable="maskClosable" :containerStyle="containerStyle">
    <子组件></子组件>
  </ASSBaseDialog>
</template>

# js
export default {
  data() {
    return {
      visible: false,
      closable: true,
      destroyOnClose: false,
      title: '标题',
      width: '50%',
      modal: true,
      lockScroll: true,
      maskClosable: false,
      containerStyle: {}
    }
  },
  methods: {
    open () {
      console.log('打开触发')
    },
    opened () {
      console.log('打开事件结束触发')
    },
    close () {
      console.log('关闭触发')
    }
  }
}
```
