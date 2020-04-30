
<script>
import mock from '@/mock/RouterList/RouterList.js'
export default {
  name: 'MenuTree',
  props: {
    color: {
      type: String
    },
    collapsed: {
      type: Boolean,
      default: false
    },
    syncActive: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      data: mock.data,
      selectedKey: null,
      defaultActive: null
    }
  },
  created () {
    // 获取当前路由选中对应的列表
    this.defaultActive = this.$route.path
  },
  methods: {
    createMenuTree (arr) {
      return arr.map((item, index) => {
        const {key, title, icon} = item
        const MenuItem = (
          <template slot="title">
            {icon && <i class={icon} />}
            <span title={title}>{title}</span>
          </template>
        )
        if (Array.isArray(item.children)) {
          return (
            <el-submenu key={key || title} index={key || title}>
              {MenuItem}
              {this.createMenuTree(item.children)}
            </el-submenu>
          )
        } else {
          return (
            <el-menu-item key={key} index={key}>
              {MenuItem}
            </el-menu-item>
          )
        }
      })
    }
  },
  render () {
    const {color, defaultActive, collapsed} = this
    const wrapProps = {
      props: {
        collapse: collapsed,
        backgroundColor: color,
        textColor: '#FFF',
        router: true,
        defaultActive: defaultActive
      }
    }
    return (
      <div>
        <el-menu {...wrapProps}>{this.createMenuTree(mock.data)}</el-menu>
      </div>
    )
  }
}
</script>

<style scoped>
</style>
