<script>
import GlobalLayout from './GlobalLayout'
import RouteView from './RouteView'

export default {
  name: 'BasicLayout',
  render () {
    return (
      <GlobalLayout>
        <transition name="page-transition" mode="out-in">
          <RouteView />
        </transition>
      </GlobalLayout>
    )
  }
}
</script>

<style scoped>
.page-transition-enter-active {
  transition: all 0.3s ease-in;
}
.page-transition-leave-active {
  transition: all 0.3s ease-out;
}
.page-transition-enter,
.page-transition-leave-to {
  opacity: 0;
}
</style>
