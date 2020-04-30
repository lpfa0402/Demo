<script>
import Aside from '@/components/Layout/Aside/Aside'
import Header from '@/components/Layout/Header/Header'
// import MultiTab from '@/components/MultiTab/MultiTab'
export default {
  name: 'GlobalLayout',
  data () {
    return {
      collapsed: false
    }
  },
  computed: {
    asideWidth () {
      return !this.collapsed ? '200px' : '64px'
    }
  },
  methods: {
    changeHandle (val) {
      this.collapsed = val
    }
  },
  render () {
    const { $slots = {}, collapsed, asideWidth } = this
    return (
      <el-container class="l_common_wrapper">
        <el-aside class="l_sidebar_wrapper" style={{ width: asideWidth }}>
          <Aside collapsed={collapsed} />
        </el-aside>
        <el-container>
          <el-header style="border-bottom: #dedede 1px solid;">
            <Header toggle={this.changeHandle}>
            </Header>
          </el-header>
          <el-main style="padding: 10px 20px;">
            <section>{$slots.default}</section>
          </el-main>
        </el-container>
      </el-container>
    )
  }
}
</script>

<style scoped>
.l_common_wrapper{
  position: absolute;
  top: 0px;
  left: 0px;
  bottom: 0px;
  right: 0px;
}
.l_sidebar_wrapper{
  transition: width 0.3s;
  overflow: visible;
}
</style>
