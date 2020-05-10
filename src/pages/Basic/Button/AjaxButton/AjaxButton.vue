<template>
  <div>
    <AjaxButton :click="saveHandle" size="small" type="primary">提交</AjaxButton>
  </div>
</template>
<script>
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'
import '@/mock/AjaxButton.js'
import {reqPost} from '@/api'
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
  methods: {
    async saveHandle (type) {
      await reqPost()
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
