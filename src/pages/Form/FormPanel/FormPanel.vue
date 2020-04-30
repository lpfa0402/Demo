<template>
  <div>
    <FormPanel :list="formList" />
   <!-- <div class="l_checked_wrapper">
      <h1>默认选中展示 activeName</h1>
      <div class="l_checked">
        <el-button size="small" @click="checkedactiveName('测试页A')">测试页A</el-button>
        <el-button size="small" @click="checkedactiveName('测试页C')">测试页C</el-button>
      </div>
    </div> -->
  </div>
</template>
<script>
import mock from '@/mock/Form/FormPanelData.js'
export default {
  name: 'Tabs',
  data () {
    return {
      formList: mock.data
    }
  },
  mounted () {
  },
  methods: {
    checkedactiveName (val) {
      this.activeName = val
    },
    checkedtype (type) {
      this.type = type
    },
    checkedposition (val) {
      this.position = val
    },
    checkeddestroyOnClose (val) {
      this.destroyOnClose = val
    },
    // 触发tab-click
    TabClick (e) {
      console.log(e)
    },
    // 触发@input
    ckinput (e) {
      console.log(e)
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
}
.l_checked{
  margin-top: 20px;
}
</style>
