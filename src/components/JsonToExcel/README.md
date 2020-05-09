<h1 align="center">
  A Vue JsonToExcel Component by jzy
</h1>

#### JsonToExcel 组件调用

`组件的引用`

```bash
# main.js
import JsonToExcel from '@/components/JsonToExcel';
Vue.use(JsonToExcel);
```

`组件参数API`

- initialValue = "Array | 数据数组"
  - 示例：参考下面数组json_data
    - 默认值： 空 必传
    - 可选值： 表头字段

- fields = "Object | 导出的字段集合"
  - 示例：参考下面数组json_fields
    - 默认值： 空 必传
    - 可选值： 与表头对应的具体信息

- fileType = "String | 导出文件的 MIME 类型"
  - 示例：:fileType="csv"
    - 默认值： xlsx
    - 可选值： xlsx / csv

- fileName = "String | 导出的文件名"
  - 示例：:fileName="文件名"
    - 默认值： 导出文件
    - 可选值： String格式自定义的文件名称

- fetch: {
  - &emsp;api: "Function | 请求的接口函数"
  - &emsp;示例：api: 'ajax请求'
    - &emsp;默认值： 空
    - &emsp;可选值： 封装好的ajax请求
    
  - &emsp;params: "Object | 接口的默认参数"
  - &emsp;示例：params: {key:'val'}
    - &emsp;默认值： 空
    - &emsp;可选值： 接口需要的参数

  - &emsp;datakey: "String | 服务端响应数据的数组列表的key"
  - &emsp;示例：datakey: 'step1.step2.items'
    - &emsp;默认值： res.data 就是数组数据
    - &emsp;可选值： 支持路径操作('step1.step2.items')，不指定表示 res.data 就是数组数据
- }

- formatHandle = "Function | 格式化数据的附加方法，通常用于处理字段翻译"
  - 示例：:fileName="val => {return val}"
    - 默认值： 空
    - 可选值： 自定义处理数据的方法

- onFinish = "Function | 导出成功的事件"
  - 示例：@onFinish="onFinish"
    - 默认值： 空
    - 可选值： 自定义的触发方法

- onError = "Function | 导出失败的事件"
  - 示例：@onError="onError"
    - 默认值： 空
    - 可选值： 自定义的触发方法

`示例代码`

```bash
# template
<template>
  <JsonToExcel size="small" type="primary" :initialValue="json_data" :fields="json_fields" fileName="导出文件.xlsx">导出</JsonToExcel>
</template>

# js
export default {
  data() {
    return {
      json_fields: {
        'Complete name': 'name',
        City: 'city',
        Telephone: 'phone.mobile',
        'Telephone 2': {
          field: 'phone.landline',
          callback: value => {
            return `Landline Phone - ${value}`;
          }
        }
      },
      json_data: [
        {
          name: 'Tony Peña',
          city: 'New York',
          country: 'United States',
          birthdate: '1978-03-15',
          phone: {
            mobile: '15417543010',
            landline: '(541) 754-3010'
          }
        },
        {
          name: 'Thessaloniki',
          city: 'Athens',
          country: 'Greece',
          birthdate: '1987-11-23',
          phone: {
            mobile: '18552755071',
            landline: '(2741) 2621-244'
          }
        }
      ]
    };
  },
};
```
