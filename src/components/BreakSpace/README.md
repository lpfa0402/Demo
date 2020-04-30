<h1 align="center">
Vue BreakSpace Component
</h1>

#### BreakSpace 组件调用

`组件的引用`

```bash
# main.js
import BreakSpace from '@/components/BreakSpace';
Vue.use(BreakSpace);
```

`组件参数API`

- label = "String | 分隔符的标题文本"
  - 示例：:label="标题"
    - 默认值： 标题
    - 可选值： String文本
- containerStyle = "Object | 分隔符外层容器的 css 样式"
  - 示例：:containerStyle="{border: '1px solid #e55954'}"
    - 默认值： 空
    - 可选值： css样式
- labelStyle = "Object | 分隔符中文本的 css 样式"
  - 示例：:labelStyle="{color: '#e55954'}"
    - 默认值： 空
    - 可选值： css样式
- contentPosition = "String | 分隔符标题位置"
  - 示例： contentPosition = "left" 
    - 默认为left
    - 可选值： left / center / right
- IconClass = "String | 分隔符标题图标"
  - 示例： contentPosition = "el-icon-mobile-phone" 
    - 默认为空
    - 可选值： element图标库
    
`示例代码`

```bash
# template
<template>
  <BreakSpace label="分隔符标题" :containerStyle="{ marginBottom: '10px' }"></BreakSpace>
</template>
```
