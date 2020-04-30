<template>
  <div>
    <LazyLoadTabs v-model="activeName" @tab-click="TabClick" @input="ckinput" :type="type" :position="position" :destroyOnClose="destroyOnClose" :tabMenus="menus"/>
   <div class="l_checked_wrapper">
      <h1>默认选中展示 activeName</h1>
      <div class="l_checked">
        <el-button size="small" @click="checkedactiveName('测试页A')">测试页A</el-button>
        <el-button size="small" @click="checkedactiveName('测试页C')">测试页C</el-button>
      </div>
    </div>
    <div class="l_checked_wrapper">
      <h1>选项卡风格 type 默认传空</h1>
      <div class="l_checked">
        <el-button size="small" @click="checkedtype(null)">默认</el-button>
        <el-button size="small" @click="checkedtype('card')">card</el-button>
        <el-button size="small" @click="checkedtype('border-card')">border-card</el-button>
      </div>
    </div>
    <div class="l_checked_wrapper">
      <h1>选项卡位置改变 position 默认传空</h1>
      <div class="l_checked">
        <el-button size="small" @click="checkedposition('top')">默认top</el-button>
        <el-button size="small" @click="checkedposition('right')">right</el-button>
        <el-button size="small" @click="checkedposition('bottom')">bottom</el-button>
        <el-button size="small" @click="checkedposition('left')">left</el-button>
      </div>
    </div>
    <div class="l_checked_wrapper">
      <h1>是否销毁隐藏状态的子组件 destroyOnClose 默认false</h1>
      <div class="l_checked">
        <el-button size="small" @click="checkeddestroyOnClose(false)">默认false</el-button>
        <el-button size="small" @click="checkeddestroyOnClose(true)">true</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import mock from '@/mock/Navigations/Tabs.js'
export default {
  name: 'Tabs',
  data () {
    return {
      activeName: '测试页A',
      menus: mock.data,
      type: null,
      position: null,
      destroyOnClose: false
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
