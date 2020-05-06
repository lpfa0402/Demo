<template>
  <div>
    <h2>通用参数：</h2>
    <FormPanel :isSubmitBtn="isSubmitBtn" :labelWidth="labelWidth" :cols="cols" :list="formList" :formType="formType" @formChange="changeHandle" />
    <div class="l_checked_wrapper">
      <div class="l_checked_wrapper_fl">
        <h1>表单面板的类型 formType</h1>
        <div class="l_checked">
          <el-button size="small" @click="checkedformType('add')">add</el-button>
          <el-button size="small" @click="checkedformType('edit')">edit</el-button>
          <el-button size="small" @click="checkedformType('show')">show</el-button>
        </div>
      </div>
      <div class="l_checked_wrapper_fl">
        <h1>每行显示多少列 cols</h1>
        <div class="l_checked">
          <el-button size="small" @click="checkedcols(1)">1</el-button>
          <el-button size="small" @click="checkedcols(2)">2</el-button>
          <el-button size="small" @click="checkedcols(3)">3</el-button>
        </div>
      </div>
      <div class="l_checked_wrapper_fl">
        <h1>标题的宽度 labelWidth</h1>
        <div class="l_checked">
          <el-button size="small" @click="checkedlabelWidth(80)">80</el-button>
          <el-button size="small" @click="checkedlabelWidth(160)">160</el-button>
        </div>
      </div>
      <div class="l_checked_wrapper_fl">
        <h1>是否显示保存/重置按钮 isSubmitBtn</h1>
        <div class="l_checked">
          <el-button size="small" @click="checkedisSubmitBtn(true)">true</el-button>
          <el-button size="small" @click="checkedisSubmitBtn(false)">false</el-button>
        </div>
      </div>
    </div>
    <h2 style="margin: 20px">List数据内通用参数：</h2>
    <FormPanel :isSubmitBtn="false" :labelWidth="labelWidth" :cols="cols" :list="commonNBlist" :formType="formType" @formChange="changeHandle" />
    <div class="l_checked_wrapper">
      <div class="l_checked_wrapper_fl">
        <h1>标题 label</h1>
        <div class="l_checked">
          <el-button size="small" @click="checkedlabel()">更换标题</el-button>
        </div>
      </div>
      <div class="l_checked_wrapper_fl">
        <h1>单独设置标题的宽度 labelWidth</h1>
        <div class="l_checked">
          <el-button size="small" @click="checkednblabelWidth()">改变宽度</el-button>
        </div>
      </div>
      <div class="l_checked_wrapper_fl">
        <h1>表单元素自身占据的列数 selfCols</h1>
        <div class="l_checked">
          <el-button size="small" @click="checkednbselfCols(1)">一列</el-button>
          <el-button size="small" @click="checkednbselfCols(2)">二列</el-button>
        </div>
      </div>
      <div class="l_checked_wrapper_fl">
        <h1>表单元素左侧的间隔列数 offsetLeftCols</h1>
        <div class="l_checked">
          <el-button size="small" @click="checkednboffsetLeftCols(0)">零列</el-button>
          <el-button size="small" @click="checkednboffsetLeftCols(1)">一列</el-button>
        </div>
      </div>
      <div class="l_checked_wrapper_fl">
        <h1>表单元素右侧的间隔列数 offsetRightCols</h1>
        <div class="l_checked">
          <el-button size="small" @click="checkednboffsetRightCols(0)">零列</el-button>
          <el-button size="small" @click="checkednboffsetRightCols(1)">一列</el-button>
        </div>
      </div>
      <div class="l_checked_wrapper_fl">
        <h1>表单元素的样式 style</h1>
        <div class="l_checked">
          <el-button size="small" @click="checkednbstyle()">加个边框</el-button>
        </div>
      </div>
      <div class="l_checked_wrapper_fl">
        <h1>是否隐藏该表单项 hidden</h1>
        <div class="l_checked">
          <el-button size="small" @click="checkednbhidden(true)">true</el-button>
          <el-button size="small" @click="checkednbhidden(false)">false</el-button>
        </div>
      </div>
      <div class="l_checked_wrapper_fl">
        <h1>是否只读 readonly</h1>
        <div class="l_checked">
          <el-button size="small" @click="checkednbreadonly(true)">true</el-button>
          <el-button size="small" @click="checkednbreadonly(false)">false</el-button>
        </div>
      </div>
      <div class="l_checked_wrapper_fl">
        <h1>是否禁用 disabled</h1>
        <div class="l_checked">
          <el-button size="small" @click="checkednbdisabled(true)">true</el-button>
          <el-button size="small" @click="checkednbdisabled(false)">false</el-button>
        </div>
      </div>
    </div>
    <h2 style="margin: 20px">INPUT数据内通用参数：</h2>
    <FormPanel ref="formPanelChange" :list="InputFormlist" />
    <div class="l_checked_wrapper">
      <div class="l_checked_wrapper_fl">
        <h1>获取表单数据 SUBMIT_FORM</h1>
        <div class="l_checked">
          <el-button size="small" @click="submitFormChange()">触发SUBMIT_FORM</el-button>
        </div>
      </div>
      <div class="l_checked_wrapper_fl">
        <h1>重置表单 RESET_FORM</h1>
        <div class="l_checked">
          <el-button size="small" @click="resetForm()">触发RESET_FORM</el-button>
        </div>
      </div>
      <div class="l_checked_wrapper_fl">
        <h1>异步获取表单数据 GET_FORM_DATA</h1>
        <div class="l_checked">
          <el-button size="small" @click="getFormData()">触发GET_FORM_DATA</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FormPanelTest',
  data () {
    return {
      formList: this.conmmonFormList(),
      commonNBlist: this.CommonNBFormList(),
      InputFormlist: this.InputList(),
      formType: 'add',
      cols: 3,
      labelWidth: 80,
      isSubmitBtn: true
    }
  },
  methods: {
    checkedformType (val) {
      this.formType = val
    },
    checkedcols (val) {
      this.cols = val
    },
    checkedlabelWidth (val) {
      this.labelWidth = val
    },
    checkedisSubmitBtn (val) {
      this.isSubmitBtn = val
    },
    changeHandle (val) {
      console.log(666)
      console.log('表单面板的数据：', val)
    },
    checkedlabel () {
      for (let i = 0; i < this.commonNBlist.length; i++) {
        this.commonNBlist[i].label = this.commonNBlist[i].label + i
      }
    },
    checkednblabelWidth () {
      for (let i = 0; i < this.commonNBlist.length; i++) {
        this.$set(this.commonNBlist[i], 'labelWidth', '120px')
      }
    },
    checkednbselfCols (val) {
      for (let i = 0; i < this.commonNBlist.length; i++) {
        this.$set(this.commonNBlist[i], 'selfCols', val)
      }
    },
    checkednboffsetLeftCols (val) {
      this.$set(this.commonNBlist[0], 'offsetLeftCols', val)
    },
    checkednboffsetRightCols (val) {
      this.$set(this.commonNBlist[0], 'offsetRightCols', val)
    },
    checkednbstyle () {
      this.$set(this.commonNBlist[0], 'style', {border: '1px solid #e55954'})
    },
    checkednbhidden (val) {
      this.$set(this.commonNBlist[0], 'hidden', val)
    },
    checkednbreadonly (val) {
      this.$set(this.commonNBlist[0], 'readonly', val)
    },
    checkednbdisabled (val) {
      this.$set(this.commonNBlist[0], 'disabled', val)
    },
    unitRenderHandle () {
      console.log('JSX节点触发')
    },
    renderHandle () {
      console.log('节点触发')
    },
    validateFn (rule, value, callback) {
      if (value.length < rule.limit) {
        return callback(new Error(rule.message))
      }
      callback()
    },
    submitFormChange () {
      let data = this.$refs.formPanelChange.SUBMIT_FORM()
      console.log(data)
    },
    resetForm () {
      this.$refs.formPanelChange.RESET_FORM()
    },
    async getFormData () {
      const [err, data] = await this.$refs.formPanelChange.GET_FORM_DATA()
      console.log(err)
      console.log(data)
    },
    conmmonFormList () {
      return [
        {
          type: 'INPUT',
          label: '搜索',
          fieldName: 'title',
          placeholder: '请输入标题名称...',
          initialValue: '',
          style: { width: '200px', textaline: 'center' },
          rules: [{ required: true, message: '请输入标题名称', trigger: 'blur' }, { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }]
        },
        {
          type: 'INPUT',
          label: '搜索',
          fieldName: 'titleb',
          placeholder: '请输入标题名称...',
          initialValue: '',
          style: { width: '200px' },
          rules: [{ required: true, message: '请输入标题名称', trigger: 'blur' }, { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }]
        },
        {
          type: 'INPUT',
          label: '搜索',
          fieldName: 'titlec',
          placeholder: '请输入标题名称...',
          initialValue: '',
          style: { width: '200px' },
          rules: [{ required: true, message: '请输入标题名称', trigger: 'blur' }, { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }]
        }
      ]
    },
    CommonNBFormList () {
      return [
        {
          type: 'INPUT',
          label: '搜索A',
          fieldName: 'title',
          placeholder: '请输入标题名称...',
          initialValue: '',
          style: { width: '200px' },
          rules: [
            { required: true, message: '请输入标题名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ]
        },
        {
          type: 'INPUT',
          label: '搜索A',
          fieldName: 'titleb',
          placeholder: '请输入标题名称...',
          initialValue: '',
          style: { width: '200px' },
          rules: [
            { required: true, message: '请输入标题名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ]
        }
      ]
    },
    InputList () {
      return [
        // {
        //   type: 'INPUT', // 类型
        //   label: 'INPUT', // label标题
        //   fieldName: 'title', // 字段的key（唯一）
        //   placeholder: '请输入标题名称...', // 提示信息
        //   initialValue: '', // 默认显示的内容 String
        //   numberFormat: true, // 指定数值格式111，111，
        //   showPassword: true,
        //   style: { width: '200px' },
        //   onFocus: (val) => {
        //     console.log('输入框获取焦点')
        //   },
        //   onEnter: (val) => {
        //     console.log(val)
        //   },
        //   minlength: 3, // 指定输入框内容最小长度
        //   maxlength: 11, // 指定输入框内容最大长度
        //   unitRender: () => { // 在输入框后面新增一个节点
        //     return (
        //       <div>
        //         <el-button icon="el-icon-search" onClick={() => this.unitRenderHandle()}></el-button>
        //       </div>
        //     )
        //   },
        //   // render: () => { // 用新的节点替换掉当前的节点
        //   //   return (
        //   //     <div>
        //   //       <el-button size="mini" type="text" onClick={() => this.renderHandle()}>
        //   //         详情
        //   //       </el-button>
        //   //     </div>
        //   //   )
        //   // },
        //   onInput: (val) => { // 输入触发，可以获取实时输入的值
        //     console.log(val)
        //   },
        //   rules: [
        //     { required: true, message: '请输入标题名称', trigger: 'blur' },
        //     // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' },
        //     { pattern: /^1[3456789]\d{9}$/, message: '不能输入单引符号和双引符号', trigger: 'blur' }
        //   ]
        // }
        // {
        //   type: 'INPUT_NUMBER',
        //   label: '标题',
        //   fieldName: 'wykey',
        //   placeholder: '提示文字',
        //   precision: 2,
        //   min: 4,
        //   max: 10,
        //   step: 8,
        //   change: val => {
        //     console.log(val)
        //   },
        //   rules: [
        //     { required: true, message: '请输入标题名称', trigger: 'blur' }
        //   ]
        // }
        // {
        //   type: 'RANGE_INPUT_NUMBER',
        //   label: '标题',
        //   fieldName: 'wykey',
        //   precision: 2,
        //   min: 4,
        //   max: 10,
        //   step: 8,
        //   rules: [
        //     { required: true, message: '请输入标题名称', trigger: 'blur' }
        //   ]
        // }
        // {
        //   type: 'INPUT_TREE',
        //   label: '所属机构',
        //   fieldName: 'tid',
        //   placeholder: '所属机构',
        //   defaultExpandAll: true,
        //   itemList: [
        //     {
        //       value: 1,
        //       text: '一级 1',
        //       children: [
        //         {
        //           value: 4,
        //           text: '二级 1-1',
        //           children: [
        //             {
        //               value: 9,
        //               text: '三级 1-1-1'
        //             },
        //             {
        //               value: 10,
        //               text: '三级 1-1-2'
        //             }
        //           ]
        //         }
        //       ]
        //     }
        //   ],
        //   rules: [{ required: true, message: '请选择所属机构', trigger: 'change' }],
        //   change: val => {
        //     console.log(val)
        //   }
        // }
        // {
        //   type: 'SELECT',
        //   label: '数据来源',
        //   fieldName: 'dataSources',
        //   placeholder: '请选择',
        //   itemList: [
        //     { value: 10451001, text: '店面' },
        //     { value: 10451003, text: '厂家' }
        //   ],
        //   rules: [{ required: true, message: '请选择数据来源', trigger: 'change' }]
        // }
        // {
        //   type: 'MULTIPLE_CHECKBOX',
        //   label: '年均里程不超过2万',
        //   fieldName: 'caveragemile',
        //   initialValue: 0,
        //   disabled: false,
        //   labelWidth: '160px',
        //   change: val => {
        //     console.log(val)
        //   }
        // }
        // {
        //   type: 'UPLOAD_FILE',
        //   label: '上传XXX图片',
        //   fieldName: 'wayPicture',
        //   placeholder: '上传XXX图片...',
        //   upload: {
        //     actionUrl: '/api/file/oss/upload'
        //   }
        // }
        // {
        //   type: 'RADIO',
        //   label: '上门取车',
        //   fieldName: 'takeVehicleFlag',
        //   disabled: false,
        //   itemList: [{ text: '是', value: 1 }, { text: '否', value: 0 }]
        // }
        // {
        //   type: 'TIME',
        //   label: '上门取车',
        //   fieldName: 'takeVehicleFlag'
        // }
        // {
        //   type: 'RANGE_TIME',
        //   label: '优惠时段',
        //   fieldName: 'discountBeginTime|discountEndTime',
        //   placeholder: '请选择',
        //   disabled: false
        // }
        // {
        //   type: 'TIME_SELECT',
        //   label: '结束时间',
        //   options: {
        //     // startTime: '10:00',
        //     // endTime: '20:00',
        //     // stepTime: '00:10'
        //   },
        //   fieldName: 'endTime',
        //   placeholder: '请输入...',
        //   rules: [{ required: true, message: '请输入结束时间', trigger: 'blur' }]
        // }
        // {
        //   type: 'RANGE_TIME_SELECT',
        //   label: 'title',
        //   fieldName: 'endTime',
        //   options: {
        //     startTime: '10:00',
        //     endTime: '20:00',
        //     stepTime: '00:10'
        //   }
        // }
        {
          type: 'INPUT_CASCADER',
          label: '产品配置',
          fieldName: 'productId',
          placeholder: '请选择',
          options: { titles: ['品牌', '车系'] },
          itemList: [
            {
              text: '一级分类1',
              value: '1'
            }
          ]
        }
        // {
        //   type: 'BREAK_SPACE',
        //   label: '产品配置',
        //   fieldName: 'productId'
        // }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.l_checked_wrapper{
  margin-top: 20px;
  padding: 10px;
  border: #dedede 1px solid;
  border-radius: 10px;
  overflow: hidden;
}
.l_checked{
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.l_checked_wrapper_fl{
  border:#dedede 1px solid;
  padding: 10px;
  float: left;
  margin-right: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
}
</style>
