<template>
  <div>
    <UploadCropper @error="conerror" @success="successHandler" :isFileName="true" :disabled="disabled" :titles="titles" :limit="limit" :isCalcHeight="isCalcHeight" :fixedSize="fixedSize" :initialValue="initialValue" actionUrl="UploadCropper" />
    <div class="l_checked_wrapper">
      <div class="l_checked_wrapper_fl">
        <h1>默认显示的图片项 initialValue</h1>
        <div class="l_checked">
          <el-button size="small" @click="checkedinitialValue(true)">添加一张默认图片</el-button>
          <el-button size="small" @click="checkedinitialValue(false)">移除一张默认图片</el-button>
        </div>
      </div>
      <div class="l_checked_wrapper_fl">
        <h1>裁剪框的宽高比 fixedSize</h1>
        <div class="l_checked">
          <el-button size="small" @click="checkedfixedSize([1, 1])">1:1</el-button>
          <el-button size="small" @click="checkedfixedSize([2, 1])">2:1</el-button>
        </div>
      </div>
      <div class="l_checked_wrapper_fl">
        <h1>是否根据裁剪图片宽高比自动计算上传组件容器高度 isCalcHeight</h1>
        <div class="l_checked">
          <el-button size="small" @click="checkedisCalcHeight(true)">true</el-button>
          <el-button size="small" @click="checkedisCalcHeight(false)">false</el-button>
        </div>
      </div>
      <div class="l_checked_wrapper_fl">
        <h1>支持上传图片的数量 limit</h1>
        <div class="l_checked">
          <el-button size="small" @click="checkedlimit(1)">默认1</el-button>
          <el-button size="small" @click="checkedlimit(2)">设置为2</el-button>
        </div>
      </div>
      <div class="l_checked_wrapper_fl">
        <h1>图片对应的标题 titles</h1>
        <div class="l_checked">
          <el-button size="small" @click="checkedtitles('a')">标题一</el-button>
          <el-button size="small" @click="checkedtitles('b')">标题二</el-button>
        </div>
      </div>
      <div class="l_checked_wrapper_fl">
        <h1>是否禁用上传图片 disabled</h1>
        <div class="l_checked">
          <el-button size="small" @click="checkeddisabled(true)">禁用</el-button>
          <el-button size="small" @click="checkeddisabled(false)">启用</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'UploadCropperTest',
  data () {
    return {
      initialValue: [
        { name: '图片',
          url: 'http://g.hiphotos.baidu.com/image/pic/item/6d81800a19d8bc3e770bd00d868ba61ea9d345f2.jpg'
        }
      ],
      fixedSize: [1, 1],
      isCalcHeight: false,
      limit: 1,
      titles: ['标题一'],
      disabled: false
    }
  },
  methods: {
    checkedinitialValue (val) {
      this.initialValue = val ? [{name: 'aaa', url: 'http://g.hiphotos.baidu.com/image/pic/item/6d81800a19d8bc3e770bd00d868ba61ea9d345f2.jpg'}] : []
      console.log(this.titles[0])
    },
    checkedfixedSize (val) {
      this.fixedSize = val
    },
    checkedisCalcHeight (val) {
      this.isCalcHeight = val
    },
    checkedlimit (val) {
      this.limit = val
    },
    checkedtitles (val) {
      this.titles = val === 'a' ? ['标题一'] : ['标题二']
    },
    checkeddisabled (val) {
      this.disabled = val
    },
    successHandler (val) {
      console.log(val)
    },
    conerror (val) {
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
