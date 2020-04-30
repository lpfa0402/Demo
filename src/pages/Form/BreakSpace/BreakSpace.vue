<template>
  <div>
    <BreakSpace :IconClass="IconClass" :contentPosition='contentPosition' :labelStyle="labelStyle" :containerStyle="containerStyle" :label="label"/>
    <div class="l_checked_wrapper">
      <div class="l_checked_wrapper_fl">
        <h1>分隔符标题 label</h1>
        <div class="l_checked">
          <el-button size="small" @click="checkedlabel('标题一')">标题一</el-button>
          <el-button size="small" @click="checkedlabel('标题二')">标题二</el-button>
        </div>
      </div>
      <div class="l_checked_wrapper_fl">
        <h1>分隔符容器样式 containerStyle</h1>
        <div class="l_checked">
          <el-button size="small" @click="checkedcontainerStyle(true)">添加边框</el-button>
          <el-button size="small" @click="checkedcontainerStyle(false)">移除边框</el-button>
        </div>
      </div>
      <div class="l_checked_wrapper_fl">
        <h1>分隔符中文本样式 labelStyle</h1>
        <div class="l_checked">
          <el-button size="small" @click="checkedlabelStyle(true)">添加颜色</el-button>
          <el-button size="small" @click="checkedlabelStyle(false)">移除颜色</el-button>
        </div>
      </div>
      <div class="l_checked_wrapper_fl">
        <h1>分隔符标题位置 contentPosition</h1>
        <div class="l_checked">
          <el-button size="small" @click="checkedcontentPosition('left')">left</el-button>
          <el-button size="small" @click="checkedcontentPosition('center')">center</el-button>
          <el-button size="small" @click="checkedcontentPosition('right')">right</el-button>
        </div>
      </div>
      <div class="l_checked_wrapper_fl">
        <h1>分隔符标题图标 IconClass</h1>
        <div class="l_checked">
          <el-button size="small" @click="checkedIconClass(null)">移除</el-button>
          <el-button size="small" @click="checkedIconClass('el-icon-mobile-phone')">添加</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BreakSpaceTest',
  data () {
    return {
      label: '标题',
      containerStyle: {},
      labelStyle: {},
      contentPosition: 'left',
      IconClass: null
    }
  },
  methods: {
    checkedlabel (val) {
      this.label = val
    },
    checkedcontainerStyle (val) {
      this.containerStyle = val === true ? {border: '1px solid #e55954'} : {}
    },
    checkedlabelStyle (val) {
      this.labelStyle = val === true ? {color: '#e55954'} : {}
    },
    checkedcontentPosition (val) {
      this.contentPosition = val
    },
    checkedIconClass (val) {
      this.IconClass = val
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
