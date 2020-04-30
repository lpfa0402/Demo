<template>
  <div>
    <BaseDialog customClass="class" @close="close" @open="open" @opened="opened" :visible.sync="visible" :closable="closable" :destroyOnClose="destroyOnClose" :title="title" :width="width" :modal="modal" :lockScroll="lockScroll" :maskClosable="maskClosable" :containerStyle="containerStyle">
      <div class="nr">6666</div>
    </BaseDialog>
    <div class="l_checked_wrapper">
      <div class="l_checked_wrapper_fl">
        <h1>显示隐藏对话框 visible</h1>
        <div class="l_checked">
          <el-button size="small" @click="checkedvisible()">打开对话框</el-button>
        </div>
      </div>
      <div class="l_checked_wrapper_fl">
        <h1>是否显示关闭按钮 closable</h1>
        <div class="l_checked">
          <el-button size="small" @click="checkedclosable(true)">显示按钮</el-button>
          <el-button size="small" @click="checkedclosable(false)">隐藏按钮</el-button>
        </div>
      </div>
      <div class="l_checked_wrapper_fl">
        <h1>关闭时销毁内容 destroyOnClose</h1>
        <div class="l_checked">
          <el-button size="small" @click="checkeddestroyOnClose(true)">销毁</el-button>
          <el-button size="small" @click="checkeddestroyOnClose(false)">不销毁</el-button>
        </div>
      </div>
      <div class="l_checked_wrapper_fl">
        <h1>标题 title</h1>
        <div class="l_checked">
          <el-button size="small" @click="checkedtitle('标题测试一')">标题测试一</el-button>
          <el-button size="small" @click="checkedtitle('标题测试二')">标题测试二</el-button>
        </div>
      </div>
      <div class="l_checked_wrapper_fl">
        <h1>宽度 width</h1>
        <div class="l_checked">
          <el-button size="small" @click="checkedwidth('50%')">50%宽</el-button>
          <el-button size="small" @click="checkedwidth('200px')">200px宽</el-button>
        </div>
      </div>
      <div class="l_checked_wrapper_fl">
        <h1>是否显示遮罩层 modal</h1>
        <div class="l_checked">
          <el-button size="small" @click="checkedmodal(true)">显示</el-button>
          <el-button size="small" @click="checkedmodal(false)">隐藏</el-button>
        </div>
      </div>
      <div class="l_checked_wrapper_fl">
        <h1>是否禁止body滚动 lockScroll</h1>
        <div class="l_checked">
          <el-button size="small" @click="checkedlockScroll(true)">禁止</el-button>
          <el-button size="small" @click="checkedlockScroll(false)">允许</el-button>
        </div>
      </div>
      <div class="l_checked_wrapper_fl">
        <h1>是否可以点击modal关闭 maskClosable</h1>
        <div class="l_checked">
          <el-button size="small" @click="checkedmaskClosable(true)">允许</el-button>
          <el-button size="small" @click="checkedmaskClosable(false)">禁止</el-button>
        </div>
      </div>
      <div class="l_checked_wrapper_fl">
        <h1>设置外层容器的样式 containerStyle</h1>
        <div class="l_checked">
          <el-button size="small" @click="checkedcontainerStyle()">添加边框</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BaseDialogTest',
  data () {
    return {
      visible: false,
      closable: true,
      destroyOnClose: false,
      title: '标题',
      width: '50%',
      modal: true,
      lockScroll: true,
      maskClosable: false,
      containerStyle: {}
    }
  },
  methods: {
    checkedvisible () {
      this.visible = true
    },
    checkedclosable (val) {
      this.closable = val
    },
    checkeddestroyOnClose (val) {
      this.destroyOnClose = val
    },
    checkedtitle (val) {
      this.title = val
    },
    checkedwidth (val) {
      this.width = val
    },
    checkedmodal (val) {
      this.modal = val
    },
    checkedlockScroll (val) {
      this.lockScroll = val
    },
    checkedmaskClosable (val) {
      this.maskClosable = val
    },
    open () {
      console.log('打开触发')
    },
    opened () {
      console.log('打开事件结束触发')
    },
    close () {
      console.log('关闭触发')
    },
    checkedcontainerStyle () {
      this.containerStyle = {
        border: '#e55954 1px solid'
      }
    }
  }
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
