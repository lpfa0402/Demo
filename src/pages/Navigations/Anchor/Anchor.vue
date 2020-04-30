<template>
  <div>
    <Anchor :labelList="labels" :labelWidth="85">
      <div class="line" id="row-01">
        第一行
      </div>
      <div class="line" id="row-02">
        第二行
      </div>
      <div class="line" id="row-03">
        第三行
      </div>
    </Anchor>
    <!-- <div class="l_checked_wrapper">
      <div class="l_checked_wrapper_fl">
        <h1>显示隐藏对话框 visible</h1>
        <div class="l_checked">
          <el-button size="small" @click="checkedvisible()">打开对话框</el-button>
        </div>
      </div>
    </div> -->
  </div>
</template>
<script>
export default {
  name: 'AnchorTest',
  data () {
    return {
      labels: [{ title: '选项卡1', id: 'row-01' }, { title: '选项卡2', id: 'row-02' }, { title: '选项卡3', id: 'row-03' }]
    }
  },
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nr{
  width: 100%;
  height: 500px;
}
.l_checked_wrapper{
  margin-top: 20px;
  padding: 10px;
  border: #dedede 1px solid;
  border-radius: 10px;
  overflow: hidden;
}
.l_checked{
  margin-top: 20px;
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
