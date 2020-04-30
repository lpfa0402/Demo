<template>
  <div class="l_login_wrapper">
    <el-button @click="go" type="primary" icon="el-icon-right" circle></el-button>
  </div>
</template>
<script>
export default {
  name: 'login',
  data () {
    return {
    }
  },
  methods: {
    go () {
      this.$router.push('/home/HomeA')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.l_login_wrapper{
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  min-width: 1200px;
  min-height: 400px;
  background-image: url('../../assets/bg.jpg');
  background-size: 100% 100%;
  background-color: #1a81ff;
  background-repeat: no-repeat;
  background-size:cover;
  background-repeat:no-repeat;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
}
.l_login_wrapper button{
  font-size: 160px;
}
</style>
