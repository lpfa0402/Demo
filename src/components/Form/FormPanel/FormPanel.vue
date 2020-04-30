<script>

export default {
  name: 'FormPanel',
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      form: {},
      visible: {}
    }
  },
  created () {
    this.initialHandle()
  },
  methods: {
    initialHandle () {
      this.form = this.createFormData()
      this.prevForm = { ...this.form }
    },
    createInputPanel (val) {
      const form = this
      const {fieldName} = val
      return val.map((item, index) => {
        console.log(item)
        if (item.type === 'INPUT') {
          return (
            <el-col>
              <el-form-item label="活动名称" prop="name">
                <el-input v-model={form[fieldName]}></el-input>
              </el-form-item>
            </el-col>
          )
        } else {
          return (
            <el-col>
              777
            </el-col>
          )
        }
      })
    }
  },
  render (h) {
    return (
      <div class="form-panel">
        <el-form ref="form" size="small">
          <el-row gutter={10}>{this.createInputPanel(this.list)}</el-row>
        </el-form>
      </div>
    )
  }
}
</script>

<style scoped>
</style>
