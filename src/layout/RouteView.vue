<script>

export default {
  name: 'RouteView',
  render () {
    return (
      <keep-alive>
        <router-view />
      </keep-alive>
    )
  }
}
</script>
