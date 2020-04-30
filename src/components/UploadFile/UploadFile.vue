<script>
// import { getConfigHeaders } from '@/api/fetch'
import axios from 'axios'
export default {
  name: 'UploadFile',
  props: {
    actionUrl: {
      type: String,
      required: true
    },
    initialValue: {
      type: Array,
      default: () => []
    },
    fileTypes: {
      type: Array,
      default: () => ['jpg', 'png', 'pdf', 'xls', 'xlsx', 'doc', 'docx', 'mp4', 'rmvb']
    },
    isOnlyButton: {
      type: Boolean,
      default: false
    },
    limit: {
      type: Number,
      default: 1
    },
    fileSize: {
      type: Number,
      default: 5
    },
    params: {
      type: Object,
      default: () => ({})
    },
    disabled: {
      type: Boolean,
      default: false
    },
    autoUpload: {
      type: Boolean,
      default: true
    },
    containerStyle: {
      type: Object,
      default: () => ({})
    },
    autoUploadDisplay: {
      type: Boolean,
      default: true
    },
    fileTypeVerification: {
      type: Boolean,
      default: false
    },
    isFilesize: {
      type: Boolean,
      default: false
    },
    multiple: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      fileList: this.initialValue
    }
  },
  watch: {
    initialValue (val) {
      this.fileList = this.initialValue
    },
    fileList (val) {
      this.$emit('change', val)
    }
  },
  methods: {
    beforeUploadHandle (file) {
      const isLt5M = file.size / 1024 / 1024 < this.fileSize
      if (this.fileTypeVerification) {
        if (!isLt5M) {
          this.$notify({ title: '提示信息', message: `上传文件大小不能超过 ${this.fileSize}M！`, type: 'warning' })
        }
        return isLt5M
      } else {
        const isType = this.fileTypes.includes(file.name.slice(file.name.lastIndexOf('.') + 1).toLowerCase())
        if (!isType) {
          this.$notify({ title: '提示信息', message: `上传的文件只能是 ${this.fileTypes.join(',')} 格式！`, type: 'warning' })
        }
        if (!isLt5M) {
          this.$notify({ title: '提示信息', message: `上传文件大小不能超过 ${this.fileSize}M！`, type: 'warning' })
        }
        return isType && isLt5M
      }
    },
    removeFileHandle (file, fileList) {
      this.fileList = fileList
    },
    successHandle (res, file, fileList) {
      if (res.resultCode === 200) {
        this.fileList = [...this.fileList, { name: file.name, url: res.data || '' }]
      } else {
        this.errorHandle(res.errMsg)
      }
    },
    errorHandle (err) {
      this.$emit('error', err || '')
      this.$message.error(err || '文件上传失败！')
    },
    async previewFileHandle (file) {
      try {
        await this.downloadFile(file)
      } catch (err) {
        this.$message.error('文件下载失败！')
      }
    },
    // 获取服务端文件 to blob
    async downLoadByUrl (url, params = {}) {
      let data = await axios({url, params, responseType: 'blob'})
      return data
      // return await axios({ url, params, responseType: 'blob' })
    },
    // 执行下载动作
    async downloadFile ({ url, name }, params) {
      if (name.split('.')[1] === 'jpg' || name.split('.')[1] === 'png') {
        return window.open(url)
      }
      // const { headers, data } = await this.downLoadByUrl(url)
      const { data } = await this.downLoadByUrl(url)
      // const contentDisposition = headers['content-disposition'] //获取文件名
      // const fileName = contentDisposition ? contentDisposition.split(';')[1].split('filename=')[1] : !name ? url.slice(url.lastIndexOf('/') + 1) : name; //ie10+
      if (navigator.msSaveBlob) {
        navigator.msSaveBlob(data, decodeURI(name))
      } else {
        const downloadUrl = window.URL.createObjectURL(data)
        let a = document.createElement('a')
        a.href = downloadUrl
        a.download = decodeURI(name)
        a.click()
        a = null
      }
    },
    // async downLoadByUrl(url, params = {}) {
    //   const { data } = await axios({ url, params, responseType: 'blob', withCredentials: !0 });
    //   return data;
    // },
    // // 执行下载动作
    // async downloadFile({ url, name }, params) {
    //   if(!url) {return !1};
    //   return window.open(url);
    //   const blob = await this.downLoadByUrl(url, params);
    //   const fileName = !name ? url.slice(url.lastIndexOf('/') + 1) : name;
    //   // ie10+
    //   if (navigator.msSaveBlob) {
    //     navigator.msSaveBlob(blob, decodeURI(fileName));
    //   } else {
    //     const downloadUrl = window.URL.createObjectURL(blob);
    //     let a = document.createElement('a');
    //     a.href = downloadUrl;
    //     a.download = decodeURI(fileName);
    //     a.click();
    //     a = null;
    //   }
    // },
    submitUpload () {
      this.$refs.upload.submit()
    }
  },

  render () {
    const { $props, $attrs, $slots, $listeners, fileList, fileTypes, fileSize, containerStyle } = this
    const wrapProps = {
      props: {
        action: $props.actionUrl,
        // headers: getConfigHeaders(),
        data: $props.params,
        fileList,
        limit: $props.limit,
        showFileList: $props.isFilesize ? true : !$props.isOnlyButton,
        withCredentials: true,
        disabled: $props.disabled,
        onPreview: this.previewFileHandle,
        beforeUpload: this.beforeUploadHandle,
        onRemove: this.removeFileHandle,
        onSuccess: this.successHandle,
        onError: this.errorHandle,
        autoUpload: $props.autoUpload,
        autoUploadDisplay: $props.autoUploadDisplay,
        multiple: $props.multiple
      },
      on: $listeners
    }
    const btnProps = {
      attrs: {
        type: 'primary',
        disabled: $props.disabled,
        ...$attrs
      }
    }
    return (
      <div class="upload-btn" style={containerStyle}>
        <el-upload ref="upload" {...wrapProps}>
          <el-button slot="trigger" {...btnProps}>
            {$slots['default']}
          </el-button>
          {!$props.autoUpload && $props.autoUploadDisplay && (
            <el-button style="margin-left: 10px;" size="small" type="primary" disabled={$props.disabled} onClick={this.submitUpload}>
              上传到服务器
            </el-button>
          )}
          {!$props.isOnlyButton ? (
            <div slot="tip" class="el-upload__tip">
              {`只能上传 ${fileTypes.join(',')} 格式，文件大小不超过${fileSize}M`}
            </div>
          ) : null}
        </el-upload>
      </div>
    )
  }
}
</script>

<style lang="less" scoped>
.upload-btn {
  display: inline-block;
}
</style>
