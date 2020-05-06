<h1 align="center">
  Vue FormPanel Component
</h1>

#### FormPanel 组件调用

`组件的引用`

```bash
# main.js
import FormPanel from '@/components/FormPanel';
Vue.use(FormPanel);
```

`通用组件参数API`

- list = "Array | 表单面板组件数据数组，支持动态赋值(数据数组必须是新的引用)}"
  - 示例：:list="true"
    - 默认值： 无  必传
    - 可选值： true / false

- formType = "String | 表单面板的类型"
  - 示例：:formType="edit"
    - 默认值： add
    - 可选值： add / edit / show

- cols = "Number | 每行显示多少列"
  - 示例：:cols="4"
    - 默认值： 3
    - 可选值： 只能是被 24 整除的值

- labelWidth = "Number | 标签的宽度"
  - 示例：:labelWidth="80"
    - 默认值： 80
    - 可选值： 数字

- isSubmitBtn = "Boolean | 是否显示保存/重置按钮"
  - 示例：:isSubmitBtn="true"
    - 默认值： true
    - 可选值： Boolean

- formChange{Function|点击保存按钮触发的事件，参数是表单数据对象}

`list 字段配置项`

#### List 通用配置
- type = "String | 数据渲染出的控件类型"
  - 示例：{type: 'INPUT'}
    - 默认值： 无 | 必传
    - 可选值： INPUT / INPUT_NUMBER / RANGE_INPUT_NUMBER / INPUT_TREE/SELECT / MULTIPLE_SELECT / CHECKBOX / MULTIPLE_CHECKBOX / DATE / RANGE_DATE / SEARCH_HELPER / SEARCH_HELPER_WEB / TEXT_AREA / UPLOAD_IMG / UPLOAD_FILE / RADIO / TIME / RANGE_TIME / TIME_SELECT / RANGE_TIME_SELECT / INPUT_CASCADER / TINYMCE/BREAK_SPACE(分隔符)

- label = "String | 标题，最好不超过 6 个字"
  - 示例：{type: 'INPUT', lable: '我是标题'}
    - 默认值： 空
    - 可选值： String 字符串

- labelWidth{String|表单域标签的的宽度，字符串类型，需要加单位(px)}
- labelWidth = "String | 表单域标签的的宽度"
  - 示例：{labelWidth: '10px'}
    - 默认值： 空
    - 可选值： String 字符串

- fieldName = "String | 字段名称 key"
  - 示例：{fieldName: 'id1'}
    - 默认值： 空 | 必传
    - 可选值： 相对应的字段，唯一值

- selfCols = "Number | 表单元素自身占据的列数"
  - 示例：{selfCols: 1}
    - 默认值： 1
    - 可选值： Number数字

- offsetLeftCols = "Number | 表单元素左侧的间隔列数"
  - 示例：{offsetLeftCols: 1}
    - 默认值： 1
    - 可选值： Number数字

- offsetRightCols = "Number | 表单元素右侧的间隔列数"
  - 示例：{offsetRightCols: 1}
    - 默认值： 1
    - 可选值： Number数字

- placeholder = "String | 提示文字"
  - 示例：{placeholder: '提示文字'}
    - 默认值： 空
    - 可选值： String

- initialValue = "String/Array | 默认显示的内容"
  - 示例：{initialValue: '初始值'}
    - 默认值： 空
    - 可选值： String / Array

- style = "Object | 表单元素的样式"
  - 示例：{style: {width: '200px'}}
    - 默认值： 空
    - 可选值： Object 内部是css

- hidden = "Boolean | 是否隐藏该表单项"
  - 示例：{hidden: true}
    - 默认值： false
    - 可选值： true / false6

- readonly = "Boolean | 是否只读"
  - 示例：{readonly: true}
    - 默认值： false
    - 可选值： true / false6

- disabled = "Boolean | 禁用"
  - 示例：{readonly: true}
    - 默认值： false
    - 可选值： true / false

- itemList = "Array | 下拉框opction数据"
  - 示例：itemList: [
          {
            value: 1, // Number
            text: '内容', // String
            children: [ // 嵌套数据
              {
                val: 1-1,
                text: '嵌套内容'
              }
            ]
          }
        ]
    - 默认值： false
    - 可选值： true / false

#### type = "INPUT" 配置

- showPassword = "Boolean | 是否显示切换密码图标"
  - 示例：{showPassword: true}
    - 默认值： false
    - 可选值： true / false

- numberFormat = "Boolean | 数值格式为100，100"
  - 示例：{numberFormat: true}
    - 默认值： false
    - 可选值： true / false

- minlength = "Number | 最小输入长度"
  - 示例：{minlength: 2}
    - 默认值： 空
    - 可选值： Numebr

- maxlength = "Number | 最大输入长度"
  - 示例：{maxlength: 10}
    - 默认值： 空
    - 可选值： Numebr

- pattern = "RegExp | 输入内容正则验证"
  - 示例：{
            rules: [
             { pattern: /^1[3456789]\d{9}$/, message: '失败提示', trigger: 'blur' } 
            ]
          }
    - 默认值： 空
    - 可选值： 正则表达式

- onFocus = "Function | 输入框获得焦点的事件"
  - 示例：输入框获取焦点
          {
            onFocus: () => {
              console.log('输入框获取焦点')
            }
          }
    - 默认值： 空
    - 可选值： 触发事件

- onEnter = "Function | 输入框回车的事件返回输入内容"
  - 示例：回车获取当前输入框的值
          {
            onEnter: (val) => {
              console.log(val)
            }
          }
    - 默认值： 空
    - 可选值： 触发事件
- onInput = "Function | 输入事件返回输入的内容"
  - 示例：输出实时输入的值
          {
            onInput: (val) => {
              console.log(val)
            }
          }
    - 默认值： 空
    - 可选值： 触发事件

- unitRender = "Function | 输入框的后置单位的渲染方法"
  - 示例： 在输入框后面新增一个搜索按钮节点
      {
        unitRender: () => {
          return (
            <div>
              <el-button icon="el-icon-search" onClick={() => this.unitRenderHandle()}></el-button>
            </div>
          )
        }
      }
    - 默认值： 无
    - 可选值： html标签

#### type = "INPUT_NUMBER" 可点击数字输入框配置  

- min = "Number | 最小值"
  - 示例：{min: 2}
    - 默认值： 空
    - 可选值： Numebr

- max = "Number | 最大值"
  - 示例：{max: 10}
    - 默认值： 空
    - 可选值： Numebr

- step = "Number | 步长"
  - 示例：{max: 2}
    - 默认值： 空
    - 可选值： Numebr

- precision = "Number | 数值精度"
  - 示例：{precision: 2}
    - 默认值： 空
    - 可选值： Numebr

#### type = "RANGE_INPUT_NUMBER" 范围输入框配置

- min = "Number | 最小值"
  - 示例：{min: 2}
    - 默认值： 空
    - 可选值： Numebr

- max = "Number | 最小值"
  - 示例：{max: 10}
    - 默认值： 空
    - 可选值： Numebr

- step = "Number | 最小值"
  - 示例：{step: 2}
    - 默认值： 空
    - 可选值： Numebr

- precision = "Number | 数值精度"
  - 示例：{precision: 2}
    - 默认值： 空
    - 可选值： Numebr

#### type = "INPUT_TREE" 模糊搜索 配置

- itemList = "Array | 可以模糊搜索的输入框"
  - 示例：[
            {
              text: '显示文字'，
              value: 1, // 对应的id
              children: [
                text: '显示文字'，
                value: 1, // 对应的id
              ]
            }
          ]
    - 默认值： 空
    - 可选值： Array

- defaultExpandAll{Boolean|是否默认收起所有节点，默认 true}
- defaultExpandAll = "Boolean | 是否收起所有节点"
  - 示例：{defaultExpandAll: true}
    - 默认值： false
    - 可选值： true / false

#### type = "SELECT" 下拉框 配置

- clearable = "Boolean | 是否启用右侧清除按钮"
  - 示例：{clearable: true}
    - 默认值： true
    - 可选值： true / false

- multiple = "Boolean | 是否启用多选"
  - 示例：{multiple: true}
    - 默认值： false
    - 可选值： true / false
  
- collapseTags = "Boolean | 多选时是否将选中值按文字的形式展示"
  - 示例：{collapseTags: true}
    - 默认值： false
    - 可选值： true / false
    
- filterable = "Boolean | 是否可搜索"
  - 示例：{filterable: true}
    - 默认值： false
    - 可选值： true / false

- clearable = "Boolean | 是否可以清空选项"
  - 示例：{clearable: true}
    - 默认值： false
    - 可选值： true / false

- change = "Function | 点击获取当前值"
  - 示例：{
            change: val => {
              console.log(val)
            },
          }
    - 默认值： 空
    - 可选值： 点击触发事件

- limitNum = "Number | 多选时用户最多可以选择的项目数，为 0 则不限制"
  - 示例：{limitNum: 2}
    - 默认值： 0
    - 可选值： Number

#### type = "MULTIPLE_SELECT" 下拉框 配置

参数同SELECT

#### type = "CHECKBOX" 单选框 配置

- trueValue = "String/Number | 选中后的值"
  - 示例：{trueValue: '1'}
    - 默认值： 1
    - 可选值： Number

- falseValue = "String/Number | 选中后的值"
  - 示例：{falseValue: '0'}
    - 默认值： 0
    - 可选值： Number

- change = "Function |  点击触发的事件"
  - 示例：{
            change: val => {
              console.log(val)
            }
         }
    - 默认值： 空
    - 可选值： 触发的事件

#### type = "MULTIPLE_CHECKBOX" 多选框组 配置

- initialValue = "Array | 默认选中"
  - 示例：{initialValue: [1, 2]}
    - 默认值： 空
    - 可选值： 多选数组的value值

#### type = "DATE" 日期 配置

- format = "String | 日期格式"
  - 示例：{format: 'yyyy-MM-dd'}
    - 默认值： 'yyyy-MM-dd-hh-mm-ss'
    - 可选值： element日期格式

- valueFormat = "String | 日期格式"
  - 示例：{format: 'yyyy-MM-dd'}
    - 默认值： 'yyyy-MM-dd-hh-mm-ss'
    - 可选值： element日期格式

- dateType = "String | 日期控件的类型"
  - 示例：{dateType: 'date'}
    - 默认值： date
    - 可选值： date: 年月日时间, datetime: 年月日时间, exactdate: 年月日, month: 月份选择, 

- minDateTime = "String | 小于该时间的日期段将被禁用"
  - 示例：{minDateTime: '2020-5-1'}
    - 默认值： 空
    - 可选值： String格式的日期 

- maxDateTime = "String | 大于该时间的日期段将被禁用"
  - 示例：{maxDateTime: '2020-10-1'}
    - 默认值： 空
    - 可选值： String格式的日期

#### type = "RANGE_DATE" 时间段选择器 配置

配置同DATE

#### type = "SEARCH_HELPER" 搜索框 配置

- request = "Object | 查询数据"
  - 示例：{
            request: {
              fetchApi: () => {}, // 搜索帮助的接口函数
              params: {canshu: 'aaa'}, // 接口参数
              datakey: "String", // 服务端响应数据的数组列表的 key，支持路径操作('step1.step2.items')，不指定表示 res.data 就是数组数据
              valueKey: "String", 数据值的字段名
              textKey: {String|数据文本的字段名}
            }
          }
    - 默认值： 空
    - 可选值： 对应的操作参数对象

#### type = "TEXT_AREA" textarea输入框 

- maxlength = "Number | 输入的最大长度"
  - 示例：{maxlength: 100}
    - 默认值： 200
    - 可选值： Number

- rows = "Number | 输入框行数"
  - 示例：{rows: 3}
    - 默认值： 2
    - 可选值： Number
    
#### type = "UPLOAD_IMG" 图片上传

- upload = "Object | 上传配置"
  - 示例：{
            upload: {
              actionUrl: 'String', // 上传地址
              fixedSize: [5, 3], // 裁剪框的宽高比
              isCalcHeight: true, // 根据裁剪图片的宽高比计算上传组件容器的高度，默认住false
              limit: 1, // 上传图片的数量
              titles: ['标题A'， '标题B'], // 图片对应的标题，同limit对应
              tipText: '提示文字', // 上传图片格式的提示文字
            }
          }

#### type = "UPLOAD_FILE" 文件上传

- upload = "Object | 上传配置"
  - 示例：{
            upload: {
              actionUrl: 'String', // 上传地址
              fileSize: 3, // 上传文件大小的限制，默认是 5M
              limit: 1, // 上传图片的数量
              fileTypes: ['jpg', 'jpeg'], // 允许上传文件的格式
            }
          }
- 注意：关于附件上传前后端数据交互的格式为 {name: 'xxx', url: 'xxx'}，因此服务端返回的数据格式要满足 name, url 两个字段的格式，name 用于回显文件名

#### type = "RADIO" 单选框
- itemList = "Array | 选项"
  - 示例：{
            [
              {text: '是', value: 1},
              {text: '是', value: 0}
            ]
          }
    - 默认值： 空 必传
    - 可选值： 放置选项的数组

#### type = "TIME" 时间选择

#### type = "RANGE_TIME" 时间段选择

- fieldName = "zidunA|ziduanB | 字段值"
  - 示例：{fieldName: 'zidunA|ziduanB'}
    - 默认值： 空 必传
    - 可选值： 
    
#### type = "TIME_SELECT" 时间下拉框

- options = "Objeck | 时间的配置"
  - 示例：{
            options: {
              startTime: '10:00', // 最小的时间
              endTime: '20:00', // 最大的时间
              stepTime: '00:10' // 每一步的间隔
            }
          }
    - 默认值：开始00:00 结束23:45 步长 00:15
    - 可选值：String格式的时间段

#### type = "RANGE_TIME_SELECT" 时间段选择下拉框

配置同TIME_SELECT

#### type = "INPUT_CASCADER" 瀑布流下拉框

- itemList = "Array | 分类的内容"
  - 示例：{
            itemList: {
              tetx: '显示文字',
              value: 1
            }
          }
    - 默认值：空  必传
    - 可选值：Object

#### type = "BREAK_SPACE" 分隔符

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

- dateType{String|日期控件的类型，只对 DATE 和 RANGE_DATE 生效，可选值为 date/datetime/exactdate/month/daterange/datetimerange/exactdaterange/monthrange}
- format{Number|日期格式 只针对 DATE 生效}
- minDateTime{String|最小日期，小于该时间的日期段将被禁用}
- maxDateTime{String|最大日期，大于该时间的日期段将被禁用}
- options{Object|有些表单控件所需要的配置}
- change{Function|checkbox 或 select 值变化的回调}

- itemList{Array|下拉框(SELECT/MULTIPLE_SELECT)的数据，[{text: '', value: ''}]}


- rules{Array|表单验证规则，用法请参考 Element-Ui，支持自定义表单校验}
- render{Function|表单元素的渲染函数，返回值是 JSX 类型节点}

`list -> options 配置项`

- options: {
  - &emsp;trueValue: {String/Number|CHECKBOX 选中后的值，默认是 '1'}
  - &emsp;falseValue: {String/Number|CHECKBOX 取消选中后的值，默认是 '0'}
  - &emsp;startTime: {String|TIME_SELECT 开始时间}
  - &emsp;endTime: {String|TIME_SELECT 结束时间}
  - &emsp;stepTime: {String|TIME_SELECT 时间步长}
  - &emsp;titles: {Array|级联选择器的标题，数组元素为字符串类型}
- }

`list -> labelOptions 配置项`

- labelOptions: {
  - &emsp;fieldName: {String|字段名称 key}
  - &emsp;initialValue: initialValue{String/Array|默认值}
  - &emsp;itemList: {Array|下拉框(SELECT)的数据，[{text: '', value: ''}]}
  - &emsp;style: {Object|表单元素的 style}
  - &emsp;disabled: {Boolean|禁用}
  - &emsp;isAfter: {Boolean| true:当前时间之后（默认 false:当前时间之前）}
  - &emsp;change: {Function|checkbox 或 select 值变化的回调}
- }

`list -> descOptions 配置项`

- descOptions: {
  - &emsp;isTooltip: {Boolean|是否以 Tooltip 形式显示描述信息}
  - &emsp;style: {Object|描述信息容器的 style}
  - &emsp;content: {String|描述信息内容}
- }
- 注意：描述信息会占据原有表单元素的部分空间，因此需要通过 list 配置项中的 style 来控制表单元素的宽度

`SEARCH_HELPER|SELECT|MULTIPLE_SELECT 配置项`

- request: {
  - &emsp;fetchApi: {Function|搜索帮助的接口函数}
  - &emsp;params: {Object|接口的默认参数}
  - &emsp;datakey: {String|服务端响应数据的数组列表的 key，支持路径操作('step1.step2.items')，不指定表示 res.data 就是数组数据}
  - &emsp;valueKey: {String|数据值的字段名}
  - &emsp;textKey: {String|数据文本的字段名}
- }




`UPLOAD_SIMPLE 配置项`

- upload: {
  - &emsp;limit: {Number|支持上传文件的数量，默认是 1}
  - &emsp;fileTypes: {Array|允许上传文件的格式数组 ['jpg', 'jpeg', 'png', 'pdf']}
- }
- 注意：关于附件上传前后端数据交互的格式为 {name: 'xxx', url: 'xxx'}，因此服务端返回的数据格式要满足 name, url 两个字段的格式，name 用于回显文件名

`UPLOAD_ALIOSS 配置项`

- upload: {
  - &emsp;limit:{Number|支持上传文件的数量，默认是 1}
  - &emsp;fileTypes: {Array|允许上传文件的格式数组 ['jpg', 'jpeg', 'png', 'pdf'] 或者 ['*'] 所有格式}
  - &emsp;minSize{Number|上传文件最小 ,默认 0}
  - &emsp;maxSize{Number|上传文件最大 ,默认 5242880(5M)}}
  - &emsp;partSize{Number|分片上传 ,设置每片多少分割上传文件， 默认 1024}}
  - &emsp;root{String|上传文件层级目录，支持多层（XXX/XXX/XXX/）)
- }
- 注意：关于附件上传前后端数据交互的格式为 {name: 'xxx', url: 'xxx'}，因此服务端返回的数据格式要满足 name, url 两个字段的格式，name 用于回显文件名


`组件暴露的方法`

- SUBMIT_FORM = "Function | 获取所有表单控件数据的集合，返回值为表单数据"
  - 示例： 1.给组件添加任意唯一的ref属性用来触发事件<FormPanel ref="formChange"/>
  - 2.通过事件触发
      methods: {
        change () {
          this.$refs.formChange.SUBMIT_FORM
        }
      }
    - 默认为空
    - 可选值： 获取表单的内容
    
- RESET_FORM = "Function | 重置表单控件" 
  - 示例：用法同上

- GET_FORM_DATA = "Function | 异步函数，获取表单数据，返回值为数组 [err, formData]" 
  - 示例：methods: {
          async change () {
            const [err, data] = await this.$refs.formChange.SUBMIT_FORM
          }
        }

`示例代码`

```bash
# template
<template>
  <FormPanel :list="formList" formType="add" @formChange="changeHandle" />
</template>

# js
export default {
  data() {
    return {
      formList: this.createFormList()
    };
  },
  methods: {
    validateFn(rule, value, callback) {
      if (value.length < rule.limit) {
        return callback(new Error(rule.message));
      }
      callback();
    },
    createFormList() {
      return [
        {
          type: 'INPUT',
          label: '搜索',
          fieldName: 'title',
          placeholder: '请输入标题名称...',
          initialValue: '',
          style: { width: '200px' },
          rules: [{ required: true, message: '请输入标题名称', trigger: 'blur' }, { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }]
        },
        {
          type: 'SELECT',
          label: '所属分类',
          fieldName: 'cid',
          placeholder: '所属分类',
          itemList: [{ text: '热点', value: '1' }, { text: '资讯', value: '2' }],
          rules: [{ required: true, message: '请选择所属分类', trigger: 'change' }]
        },
        {
          type: 'UPLOAD_IMG',
          label: '上传身份证',
          fieldName: 'wayPicture',
          placeholder: '上传身份证...',
          rules: [
            { required: true, message: '请上传身份证', trigger: 'change' },
            { limit: 2, validator: this.validateFn, message: '请上传两张图片', trigger: 'change' }
          ],
          upload: {
            actionUrl: '/api/file/oss/upload',
            fixedSize: [5, 3],
            limit: 2,
            isCalcHeight: true
          }
        },
        {
          type: 'UPLOAD_FILE',
          label: '上传文件',
          fieldName: 'wayFiles',
          placeholder: '上传文件...',
          rules: [{ required: true, message: '请上传文件', trigger: 'change' }],
          initialValue: [{ name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }],
          upload: {
            actionUrl: '/api/file/oss/upload',
            limit: 2,
            fileTypes: ['jpg', 'png']
          }
        }
      ];
    },
    changeHandle(val){
      console.log('表单面板的数据：', val);
    }
  }
};
```
