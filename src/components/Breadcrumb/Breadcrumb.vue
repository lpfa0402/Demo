<script>

export default {
  props: {
    separator: {
      type: String,
      default: '/'
    },
    separatorClass: {
      type: String
    },
    replace: {
      type: Boolean,
      default: false
    }
  },
  name: 'Breadcrumb',
  computed: {
    breadcrumbs () {
      return this.$route.matched
        .map(x => {
          let { path: key, meta } = x
          let { title = '', breadcrumb = true } = meta
          if (!key) key = '/'
          return { key, title, breadcrumb }
        })
        .filter(x => x.breadcrumb && !this.isRedirect(x.key))
    }
  },
  methods: {
    // 重定向刷新页面
    isRedirect (path) {
      return path.startsWith('/redirect')
    }
  },
  render () {
    const {separator, separatorClass, replace} = this
    const wrapProps = {
      props: {
        separator: separator,
        separatorClass: separatorClass,
        replace: replace
      }
    }
    return (
      <div class="breadcrumb-wrap">
        <span>位置导航：</span>
        <el-breadcrumb {...wrapProps}>
          {this.breadcrumbs.map((x, i) => (
            //  to={{ path: x.key }}
            <el-breadcrumb-item key={x.key} to={i ? {} : { path: x.key }}>
              {x.title}
            </el-breadcrumb-item>
          ))}
        </el-breadcrumb>
      </div>
    )
  }
}
</script>

<style scoped>
.breadcrumb-wrap{
  display: flex;
  align-items: center;
  padding-bottom: 10px;
}
</style>
