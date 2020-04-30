<h1 align="center">
 Vue UploadCropper Component
</h1>

#### UploadCropper 组件调用

`组件的引用`

```bash
# main.js
import UploadCropper from '@/components/UploadCropper';
Vue.use(UploadCropper);
```

`组件参数API`

- actionUrl = "String | 图片上传的地址"
  - 示例： actionUrl="actionUrl"
    - 默认值： 空 必传项
    - 可选值： 接收图片的地址
- initialValue{Array|默认显示的图片项，值的格式为 { name: '文件名', url: '地址' }}
- initialValue = "Array | 默认显示的图片项"
  - 示例： :initialValue="[{name: 'nameA', url: 'urlA'}, {name: 'nameB', url: 'urlB'}]"
    - 默认值： 空 选传
    - 可选值： 放置图片相关的数组
- fixedSize = "Array | 裁剪框的宽高比"
  - 示例： fixedSize="[1, 5]"
    - 默认值： 空 选传
    - 可选值： 放置宽高比例的数组
- isCalcHeight = "Boolean | 是否根据裁剪图片宽高比自动计算上传组件容器高度"
  - 示例：:isCalcHeight="true"
    - 默认值： false
    - 可选值： true / false
- limit = "Number | 支持上传图片的数量"
  - 示例：:limit="1"
    - 默认值： 1
    - 可选值： 数字
- titles = "Array | 图片对应的标题"
  - 示例：:titles="['标题一']"
    - 默认值： 与limit的数量保持一致
    - 可选值： 标题
- disabled = "Boolean | 是否禁用上传图片"
  - 示例：:disabled="false"
    - 默认值： false
    - 可选值： true / false
- isFileName = "Boolean | 是否传入文件名到后台"
  - 示例：:isFileName="false"
    - 默认值： false
    - 可选值： true / false
- success{Function|上传服务端成功的回调事件，参数是图片地址}
- error{Function|上传服务端失败的回调事件，参数是错误对象}

`示例代码`

```bash
# template
<template>
  <ASSUploadCropper @error="conerror" @success="successHandler" :isFileName="true" :disabled="false" :limit="1" :isCalcHeight="true" :fixedSize="[1, 5]" :initialValue="[{name: 'aaa', url:'sdsdasdw'},{name: 'aaa', url:'sdsdasdw'}]" actionUrl="UploadCropper" />
</template>

# js
export default {
  methods: {
    successHandler (val) {
      console.log(val)
    },
    conerror (val) {
      console.log(val)
    }
  }
};
```
