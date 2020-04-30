<template>
  <div>
    tabs测试页ccccccc
  </div>
</template>
<script>
export default {
  props: {
    type: Number
  },
  name: 'TabsPageC',
  mounted () {
    this.$emit('myClallback', '测试myClallback的回调')
    this.$emit('myClallbackB', '测试myClallbackB的回调')
  },
  methods: {
    // myClallback () {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
