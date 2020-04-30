<template>
  <div class="l_aside_wrapper">
    <logo :collapsed="collapsed" />
    <el-scrollbar class="menu_tree">
      <MenuTree :color="color" :collapsed="collapsed"/>
    </el-scrollbar>
  </div>
</template>

<script>
import logo from './logo'
import MenuTree from './MenuTree'
export default {
  components: {
    logo,
    MenuTree
  },
  props: {
    collapsed: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      color: '#272b2e'
    }
  }
}
</script>

<style>
.l_aside_wrapper{
  position: relative;
  height: 100%;
  background-color: #272b2e;
  box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
  z-index: 5;
}
.menu_tree{
  height: calc(100vh - 50px);
  background-color: #272b2e;
}
.menu_tree>.el-scrollbar__wrap{
  overflow-x: hidden;
}
.menu_tree .el-menu{
  border-right: none;
}
</style>
