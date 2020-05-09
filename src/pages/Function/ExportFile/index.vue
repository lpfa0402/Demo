<template>
  <div>
    <JsonToExcel :fileType="fileType" @onError="onError" @onFinish="onFinish" :formatHandle="formatHandle" :initialValue="json_data" :fields="json_fields" :fileName="fileName"/>
    <div class="l_checked_wrapper">
      <div class="l_checked_wrapper_fl">
        <h1>导出文件的MIME类型 fileType</h1>
        <div class="l_checked">
          <el-button size="small" @click="checkedfileType('xlsx')">xlsx类型</el-button>
          <el-button size="small" @click="checkedfileType('csv')">csv类型</el-button>
        </div>
      </div>
      <div class="l_checked_wrapper_fl">
        <h1>导出文件的名字 fileName</h1>
        <div class="l_checked">
          <el-button size="small" @click="checkedfileName('文件名A')">文件名A</el-button>
          <el-button size="small" @click="checkedfileName('文件名B')">文件名B</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ExportFileTest',
  data () {
    return {
      fileType: 'xlsx',
      fileName: '导出文件',
      json_fields: {
        'Complete name': 'name',
        City: 'city',
        Telephone: 'phone.mobile',
        'Telephone 2': {
          field: 'phone.landline',
          callback: value => {
            return `Landline Phone - ${value}`
          }
        }
      },
      json_data: [
        {
          name: 'Tony Peña',
          city: 'New York',
          country: 'United States',
          birthdate: '1978-03-15',
          phone: {
            mobile: '15417543010',
            landline: '(541) 754-3010'
          }
        },
        {
          name: 'Thessaloniki',
          city: 'Athens',
          country: 'Greece',
          birthdate: '1987-11-23',
          phone: {
            mobile: '18552755071',
            landline: '(2741) 2621-244'
          }
        }
      ]
    }
  },
  methods: {
    checkedfileType (val) {
      this.fileType = val
    },
    checkedfileName (val) {
      this.fileName = val
    },
    formatHandle (val) {
      console.log(val)
      return val
    },
    onFinish () {
      alert('导出成功触发')
    },
    onError () {
      alert('导出失败触发')
    }
  }
}
</script>
<style scoped>
.l_checked_wrapper{
  margin-top: 20px;
  padding: 10px;
  border: #dedede 1px solid;
  border-radius: 10px;
  overflow: hidden;
}
.l_checked{
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.l_checked_wrapper_fl{
  border:#dedede 1px solid;
  padding: 10px;
  float: left;
  margin-right: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
}
</style>
