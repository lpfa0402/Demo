<h1 align="center">
Vue UploadFile Component
</h1>

#### UploadFile 组件调用

`组件的引用`

```bash
# main.js
import UploadFile from '@/components/UploadFile';
Vue.use(UploadFile);
```

`组件参数API`

- actionUrl = "String | 上传的地址"
  - 示例：actionUrl="actionUrl"
    - 默认值： 无， 必传
    - 可选值： 接收图片的地址
- initialValue = "Array | 默认显示的文件"
  - 示例：:initialValue="[{name: '文件名', url: '文件地址'}]
    - 默认值： 无
    - 可选值： 默认显示文件的数组
- fileTypes = "Array | 限制上传附件的类型"
  - 示例：:fileTypes="['jpg', 'png']"
    - 默认值：jpg / png / pdf xls / xlsx / doc / docx / mp4 / rmvb
    - 可选值：jpg / png / pdf xls / xlsx / doc / docx / mp4 / rmvb
- isOnlyButton = "Boolean | 是否仅显示上传按钮"
  - 示例：isOnlyButton="false"
    - 默认值： false
    - 可选值： true / false
- limit = "Number | 支持上传附件的数量，默认是1"
  - 示例：:limit="2"
    - 默认值： 1
    - 可选值： 数字
- fileSize = "Number | 限制上传文件的大小，单位是M"
  - 示例：:fileSize="6"
    - 默认值： 5
    - 可选值： 数字
- params = "Object | 上传时附带的额外参"
  - 示例：:params="{canshuA: 'aaa'}"
    - 默认值： 无
    - 可选值： 对象
- disabled = "Boolean | 是否禁用"
  - 示例：:disabled="true"
    - 默认值： false
    - 可选值： true / false
- autoUpload = "Boolean | 是否自动上传"
  - 示例：:autoUpload="true"
    - 默认值： false
    - 可选值： true / false
- containerStyle = "Object | 承载按钮层容器的css样式"
  - 示例：:containerStyle="{border: '1px solid #dedede'}"
    - 默认值： 空
    - 可选值： css样式
- multiple = "Boolean | 是否可批量上传默认为"
  - 示例：:multiple="true"
    - 默认值： false
    - 可选值： true / false
- change{Function|上传服务端成功的回调事件，参数是上传附件的列表}
- error{Function|上传服务端失败的回调事件，参数是错误对象}

`示例代码`

```bash
# template
<template>
  <UploadFile :multiple="true" :containerStyle="{border: '1px solid #dedede'}" :autoUpload="true" :disabled="false" :params="{canshu: 'aaa'}" :fileSize="6" :limit="2" :isOnlyButton="false" :fileTypes="['jpg', 'png']" actionUrl="actionUrl" :initialValue="[{name: '文件名', url: '文件地址'}]"/>
</template>

# js
export default {
  data() {
    return {
      form: {
        fileList: []
      }
    };
  },
  methods: {
    successHandler(val) {
      this.form.fileList = val;
    }
  }
};
```
