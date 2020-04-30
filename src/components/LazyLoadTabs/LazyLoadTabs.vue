<script>

export default {
  name: 'LazyLoadTab',
  props: {
    value: {
      type: String,
      required: true // 默认选中必填
    },
    tabMenus: {
      type: Array,
      default: () => [],
      required: true // 必填
    },
    type: {
      type: String,
      default: ''
    },
    position: {
      type: String,
      default: 'top'
    },
    destroyOnClose: {
      type: Boolean,
      default: false
    }
  },
  data () {
    // 组件路径的前缀
    this.pathFix = 'pages'
    return {
      activeName: this.value
    }
  },
  watch: {
    value (nextProps) {
      this.activeName = nextProps
      this.loadComponent(nextProps)
    }
  },
  created () {
    this.loadComponent(this.value)
  },
  methods: {
    loadComponent (activeName) {
      const { path } = this.tabMenus.find(x => x.title === activeName) || {}
      if (!path) return
      // if (this.$options.components[activeName]) return;
      // 动态加载组件
      this.$options.components[activeName] = () => import(`@/${this.pathFix}/${path}.vue`)
      this.$nextTick(() => {
        // 触发自定义事件
        this.$emit('tab-click', this.$refs[activeName])
        if (!this.destroyOnClose) {
          this.$refs[activeName].isLoaded = true
        }
      })
    },
    clickHandler (tab, e) {
      this.activeName = tab.label
      this.$emit('input', this.activeName)
    },
    createTabPanel (h) {
      return this.tabMenus.map(x => {
        const isCurrent = x.title === this.value
        // JSX 中的动态组件不能用 <component /> 标签，必须这样实现
        const component = h(this.$options.components[x.title], {
          // 解决 LazyLoadTab 调用时，传入的参数改变，不触发子组件重新渲染的问题
          props: x.params,
          on: x.on
        })
        return (
          <el-tab-pane ref={x.title} key={x.title} label={x.title} name={x.title} disabled={x.disabled} lazy>
            {!this.destroyOnClose ? <keep-alive>{component}</keep-alive> : isCurrent ? component : null}
          </el-tab-pane>
        )
      })
    }
  },
  render (h) {
    const { activeName, type, position } = this
    const wrapProps = {
      props: {
        value: activeName,
        type: type,
        tabPosition: position
      }
    }
    return (
      <el-tabs {...wrapProps} on-tab-click={this.clickHandler}>
        {this.createTabPanel(h)}
      </el-tabs>
    )
  }
}
</script>

<style scoped>
</style>
