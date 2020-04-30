<template>
  <div>
    <Tinymce :actionUrl="'actionUrl'"/>
    <div class="l_checked_wrapper">
      <div class="l_checked_wrapper_fl">
        <h1>默认显示的图片项 initialValue</h1>
        <div class="l_checked">
          <el-button size="small" @click="checkedinitialValue(true)">添加一张默认图片</el-button>
          <el-button size="small" @click="checkedinitialValue(false)">移除一张默认图片</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TintmceTest',
  data () {
    return {
    }
  },
  methods: {
    checkedinitialValue (val) {
      this.initialValue = val ? [{name: 'aaa', url: 'http://g.hiphotos.baidu.com/image/pic/item/6d81800a19d8bc3e770bd00d868ba61ea9d345f2.jpg'}] : []
      console.log(this.titles[0])
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
