<script>
export default {
  name: 'Anchor',
  props: {
    labelList: {
      type: Array,
      default: () => []
    },
    activeId: {
      type: String,
      default: ''
    },
    labelWidth: {
      type: [String, Number],
      default: 80
    }
  },
  data () {
    this.scroll = null
    this.posArr = []
    this.state = 'ready' // 状态变量
    return {
      activeKey: this.createActiveKey()
    }
  },
  mounted () {
    this.createScrollDom()
    this.setPositionArr()
    this.bindScrollEvent()
  },
  beforeDestroy () {
    // 移除事件监听
    this.scroll.removeEventListener('scroll', this.scrollEventHandle)
  },
  methods: {
    createActiveKey () {
      let key = this.activeId
      if (!key && this.labelList.length) {
        key = this.labelList[0].id
      }
      return key
    },
    findCurIndex (t) {
      let top = Math.abs(t)
      let index = -1
      for (let i = 0; i < this.posArr.length; i++) {
        let t1 = this.posArr[i]
        let t2 = this.posArr[i + 1] || 10000
        if (top >= t1 && top < t2) {
          index = i
        }
      }
      return index
    },
    syncLabelKey (index) {
      this.activeKey = this.labelList[index].id
    },
    clickHandle (e, key) {
      e.stopPropagation()
      this.state = 'stop'
      this.activeKey = key
      if (this.isIE()) {
        this.scroll.scrollTop = document.getElementById(key).offsetTop
      } else {
        this.scroll.scrollTo({ top: document.getElementById(key).offsetTop, behavior: 'smooth' })
        setTimeout(() => {
          this.state = 'ready'
        }, 400)
      }
    },
    setPositionArr () {
      this.posArr = this.labelList.map(x => document.getElementById(x.id).offsetTop)
    },
    // 函数防抖
    debounce (fn, delay) {
      return function (...args) {
        fn.timer && clearTimeout(fn.timer)
        fn.timer = setTimeout(() => fn.apply(this, args), delay)
      }
    },
    bindScrollEvent () {
      this.scroll.addEventListener('scroll', this.scrollEventHandle, false)
    },
    scrollEventHandle (e) {
      this.debounce(this.moveHandle, 20)(e)
    },
    createScrollDom () {
      this.scroll = this.$refs.scroll
    },
    moveHandle (e) {
      if (this.state !== 'ready') return
      let index = this.findCurIndex(e.target.scrollTop)
      if (index === -1) return
      this.syncLabelKey(index)
    },
    createLabel () {
      if (!this.labelList.length) return null
      const LabelItems = this.labelList.map(x => (
        <li key={x.id} href={`#/${x.id}`} class={{ selected: this.activeKey === x.id }} onClick={e => this.clickHandle(e, x.id)}>
          {x.title}
        </li>
      ))
      return (
        <div key="label" class="labels" style={{ width: `${this.labelWidth}px` }}>
          {LabelItems}
        </div>
      )
    },
    isIE () {
      return !!window.ActiveXObject || 'ActiveXObject' in window
    },
    // 组件向外公开露的方法
    REFRESH () {
      this.setPositionArr()
    }
  },
  render () {
    return (
      <div class="anchor-wrap">
        {this.createLabel()}
        <div class="scroll-wrapper" ref="scroll">
          {this.$slots['default']}
        </div>
      </div>
    )
  }
}
</script>

<style scoped>
.anchor-wrap{
  height: 100%;
  display: flex;
  flex-direction: row;
}
.anchor-wrap .labels{
  width: 80px;
  height: 100%;
  border-right: 1px solid #dedede;
}
</style>
