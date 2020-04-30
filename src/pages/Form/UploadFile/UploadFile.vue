<template>
  <div>
    <UploadFile @error="error()" @change="change()" :multiple="multiple" :containerStyle="containerStyle" :autoUpload="true" :disabled="disabled" :params="{canshu: 'aaa'}" :fileSize="fileSize" :limit="limit" :isOnlyButton="isOnlyButton" :fileTypes="fileTypes" actionUrl="actionUrl" :initialValue="initialValue"/>
    <div class="l_checked_wrapper">
      <div class="l_checked_wrapper_fl">
        <h1>默认显示的文件 initialValue</h1>
        <div class="l_checked">
          <el-button size="small" @click="checkedinitialValue(true)">添加一张默认图片</el-button>
          <el-button size="small" @click="checkedinitialValue(false)">移除一张默认图片</el-button>
        </div>
      </div>
      <div class="l_checked_wrapper_fl">
        <h1>限制上传附件的类型 fileTypes</h1>
        <div class="l_checked">
          <el-button size="small" @click="checkedfileTypes('jpg')">jpg格式</el-button>
          <el-button size="small" @click="checkedfileTypes('png')">png， pdf格式</el-button>
        </div>
      </div>
      <div class="l_checked_wrapper_fl">
        <h1>是否仅显示上传按钮 isOnlyButton</h1>
        <div class="l_checked">
          <el-button size="small" @click="checkedisOnlyButton(true)">true</el-button>
          <el-button size="small" @click="checkedisOnlyButton(false)">false</el-button>
        </div>
      </div>
      <div class="l_checked_wrapper_fl">
        <h1>支持上传附件的数量 limit</h1>
        <div class="l_checked">
          <el-button size="small" @click="checkedlimit(1)">一个</el-button>
          <el-button size="small" @click="checkedlimit(2)">两个</el-button>
        </div>
      </div>
      <div class="l_checked_wrapper_fl">
        <h1>限制上传文件的大小 fileSize</h1>
        <div class="l_checked">
          <el-button size="small" @click="checkedfileSize(1)">1 M</el-button>
          <el-button size="small" @click="checkedfileSize(6)">2 M</el-button>
        </div>
      </div>
      <div class="l_checked_wrapper_fl">
        <h1>是否禁用按钮 disabled</h1>
        <div class="l_checked">
          <el-button size="small" @click="checkeddisabled(true)">禁用</el-button>
          <el-button size="small" @click="checkeddisabled(false)">启用</el-button>
        </div>
      </div>
      <div class="l_checked_wrapper_fl">
        <h1>承载按钮层容器的css样式 containerStyle</h1>
        <div class="l_checked">
          <el-button size="small" @click="checkedcontainerStyle(true)">添加一个边框</el-button>
          <el-button size="small" @click="checkedcontainerStyle(false)">移除边框</el-button>
        </div>
      </div>
      <div class="l_checked_wrapper_fl">
        <h1>是否可以批量上传 multiple</h1>
        <div class="l_checked">
          <el-button size="small" @click="checkedmultiple(true)">true</el-button>
          <el-button size="small" @click="checkedmultiple(false)">false</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'UploadFileTest',
  data () {
    return {
      initialValue: [],
      fileTypes: [],
      isOnlyButton: false,
      limit: 1,
      fileSize: 5,
      disabled: false,
      containerStyle: {},
      multiple: false
    }
  },
  methods: {
    checkedinitialValue (val) {
      this.initialValue = val ? [{name: 'aaa', url: 'http://g.hiphotos.baidu.com/image/pic/item/6d81800a19d8bc3e770bd00d868ba61ea9d345f2.jpg'}] : []
    },
    checkedfileTypes (val) {
      this.fileTypes = val === 'jpg' ? ['jpg'] : ['png', 'pdf']
    },
    checkedisOnlyButton (val) {
      this.isOnlyButton = val
    },
    checkedlimit (val) {
      this.limit = val
    },
    checkedfileSize (val) {
      this.fileSize = val
    },
    checkeddisabled (val) {
      this.disabled = val
    },
    checkedcontainerStyle (val) {
      this.containerStyle = val === true ? {border: '1px solid #e55954'} : {}
    },
    checkedmultiple (val) {
      this.multiple = val
    },
    change (val) {
      // 上传成功回调
      console.log(val)
    },
    error (val) {
      // 上传失败的回调
      console.log(val)
    }
  }
}
</script>
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
