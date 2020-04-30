<template>
  <div>
    <Breadcrumb :separator="separator" :separatorClass="separatorClass" :replace="replace"/>
    <div class="l_checked_wrapper">
      <h1>分隔符 separator，默认为'/'，可选值类型为 String </h1>
      <!-- <div class="l_checked">
        <el-button size="small" @click="checkedseparator('/')">默认值'/'</el-button>
        <el-button size="small" @click="checkedseparator('分隔')">可选值</el-button>
      </div> -->
    </div>
    <div class="l_checked_wrapper">
      <h1>分隔符 separatorClass，默认为''，可选值类型为 图标分隔符的class，使用此属性separator会失效 </h1>
      <!-- <div class="l_checked">
        <el-button size="small" @click="checkedseparatorClass('')">默认值''</el-button>
        <el-button size="small" @click="checkedseparatorClass('el-icon-arrow-right')">传入图标</el-button>
      </div> -->
    </div>
    <div class="l_checked_wrapper">
      <h1>replace 进行路由跳转时，启用 replace 将不会向 history 添加新记录, 默认状态为false</h1>
    </div>
  </div>
</template>
<script>
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'
export default {
  name: 'Tabs',
  components: {
    Breadcrumb
  },
  data () {
    return {
      separator: '/',
      separatorClass: '',
      replace: false
    }
  },
  mounted () {
  },
  methods: {
    checkedseparator (val) {
      this.separator = val
    },
    checkedseparatorClass (val) {
      this.separatorClass = val
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
