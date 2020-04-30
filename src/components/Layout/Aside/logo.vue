<template>
  <div class="logo">
    <router-link to="/" :title="title">
      <img
        src="@/assets/img/logo1.png"
        alt="logo"
        style="width:70px;"
        v-if="!collapsed"
        class="logoImg"
      />
      <img
        src="@/assets/img/logo2.png"
        alt="logo"
        style="width:29px;"
        v-if="collapsed"
        class="logoImg1"
      />
    </router-link>
  </div>
</template>

<script>

export default {
  name: 'Logo',
  props: {
    title: {
      type: String,
      default: ''
    },
    collapsed: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isInitial: true
    }
  },
  computed: {
  },
  watch: {
    collapsed (val) {
      this.isInitial = false
    }
  }
}
</script>

<style scoped>
.log{
  display: flex;
  align-items: center;
  justify-content: center;
}
@keyframes show {
  0% {
    opacity: 0;
    width: 40px;
  }
  100% {
    opacity: 1;
    width: 140px;
  }
}
@keyframes hide {
  0% {
    opacity: 0;
    width: 80px;
  }
  100% {
    opacity: 1;
    width: 40px;
  }
}
</style>
