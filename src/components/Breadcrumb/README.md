<h1 align="center">
  Vue Bareadcrumb Component
</h1>

#### Bareadcrumb 组件调用

`组件功能介绍`

```bash
  显示当前页面位置
```

`组件的引用`

```bash
# 使用页内js
import Bareadcrumb from '@/components/Bareadcrumb/Bareadcrumb';
export default {
  components: {
    Breadcrumb
  }
}
```

`组件参数API`

- separator="String | 分隔符号" 
  - 示例： separator="分隔符" 
    - 可不传，默认符号为 "/"
- separatorClass="String | 分隔符号使用icon图标"
  - 示例 separatorClass="el-icon-arrow-right"
    - 使用此参数，separator会失效
- replace="Boolean | 使用此组件跳转时是否向 history 添加新记录"
  - 示例 replace = true 
    - 可不传，默认为false

`示例代码`

```bash
# template
<template>
  <Breadcrumb :separator="separator" :separatorClass="separatorClass" :replace="replace"/>
</template>
