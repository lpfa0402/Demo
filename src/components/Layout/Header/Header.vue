<template>
  <div class="l_header_wrapper">
    <span class="trigger fl" @click="clickHandler">
      <i :class="[isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold']" />
    </span>
    <!-- <div class="action fr">
      <slot name="action" />
    </div> -->
    <div class="menus">
      <slot name="menu" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    collapsed: {
      type: Boolean,
      default: false
    },
    toggle: {
      type: Function,
      default: () => {}
    }
  },
  data () {
    return {
      isCollapse: this.collapsed
    }
  },
  methods: {
    clickHandler () {
      this.isCollapse = !this.isCollapse
      this.toggle(this.isCollapse)
    }
  }
}
</script>

<style scoped>
/* .l_header_wrapper{
  margin: 0 -20px;
  height: 60px;
  background-color: #fff;
  border-bottom: 1px solid #d9d9d9;
  position: relative;
  z-index: 3;
} */
.l_header_wrapper .trigger{
  display: inline-block;
  font-size: 24px;
  line-height: 54px;
  padding: 0 20px;
  cursor: pointer;
  transition: color 0.3s ease;
  float: left;
}
.l_header_wrapper .menus{
  margin: 0 200px 0 65px;
  padding-top: 20px;
}
</style>
