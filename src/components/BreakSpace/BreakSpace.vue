<script>
export default {
  name: 'BreakSpace',
  props: {
    label: {
      type: String,
      default: null
    },
    containerStyle: {
      type: Object,
      default: () => ({})
    },
    labelStyle: {
      type: Object,
      default: () => ({})
    },
    contentPosition: {
      type: String,
      default: 'left'
    },
    IconClass: {
      type: String,
      default: null
    }
  },
  render () {
    const { containerStyle, labelStyle, label, contentPosition, IconClass } = this
    const wrapProps = {
      props: {
        contentPosition: contentPosition
      }
    }
    return (
      <div class="form-divider" style={{ ...containerStyle }}>
        <el-divider {...wrapProps}>
          {IconClass ? <i class={IconClass}></i> : ''}
          <span class="title" style={{ ...labelStyle }}>
            {label}
          </span>
        </el-divider>
      </div>
    )
  }
}
</script>

<style lang="less" scoped>
.form-divider {
  width: 100%;
  height: 32px;
  overflow: hidden;
  /deep/ .el-divider--horizontal {
    margin: 15px 0;
    .el-divider__text {
      padding: 0 10px;
      &.is-left {
        left: -10px;
      }
      .title {
        display: inline-block;
        height: 20px;
        font-size: 14px;
        &::before {
          content: '';
          display: inline-block;
          width: 6px;
          height: 100%;
          background-color: #bb0a30;
          margin-right: 8px;
          vertical-align: middle;
        }
      }
    }
  }
}
</style>
