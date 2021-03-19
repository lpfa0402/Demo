<template>
  <el-dialog title="添加材料" width="1300px" :visible.sync="changeUnit" class="tj_dialog">
    <div class="l_add_material">
      <div class="l_add_material_search">
        <el-input style="width: 220px;" v-model="keywords" placeholder="请输入材料信息"></el-input>
        <span style="margin-left: 20px">供应商：{{selectlist.length}}</span>
        <el-select style="width: 220px;" v-model="supplier" placeholder="请选择">
          <el-option
            v-for="item in supplierOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-button type="primary" style="margin-left: 10px" @click="init">搜索</el-button>
      </div>
      <el-table
        v-loading="tableLoading"
        :header-cell-class-name="cellClass"
        id="l_add_material_table_id"
        ref="addMaterialScienceTab"
        :data="tableData"
        border
        height="500px"
        @select="tableSelectChange"
        @select-all="tableSelectAllChange"
        style="width: 100%; margin-top: 15px">
        <el-table-column 
          prop="symbol" 
          label="序号" 
          width="64" 
          header-align="center">
        </el-table-column>
        <el-table-column
          :selectable='checkboxDis'
          align="center"
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column prop="name" label="名称" width="200" header-align="center">
          <template slot-scope="scope">
            <div
              v-if="scope.row.child > 0"
              @click="handleOpen(scope)"
              :style="'cursor:pointer; margin-left:'+((scope.row.level-1)*20)+'px'"
              class="font_weight">
              <div class="pro-cost-expanded" v-if="scope.row.open == true"></div>
              <div class="pro-cost-closed" v-else></div>
              <span :title="scope.row.name">{{ scope.row.name}}</span>
            </div>
            <span v-if="scope.row.child < 1" :title="scope.row.product_name">
              {{scope.row.product_name}}
            </span>
          </template>
        </el-table-column>
        <el-table-column
          prop="brand_name"
          label="品牌">
        </el-table-column>
        <el-table-column
          prop="model"
          label="型号">
        </el-table-column>
        <el-table-column
          prop="stander"
          label="规格">
        </el-table-column>
        <el-table-column
          prop="product_quantity"
          label="数量">
        </el-table-column>
        <el-table-column
          prop="unit"
          label="单位">
        </el-table-column>
        <el-table-column
          prop="price"
          label="单价">
        </el-table-column>
        <el-table-column
          prop="price_sum"
          label="合价">
        </el-table-column>
        <el-table-column
          prop="manufacturer"
          label="供应商">
        </el-table-column>
      </el-table>
    </div>
    <div slot="footer">
        <el-button type="primary">确定</el-button>
        <el-button class="btn-whole btn-cancel" @click="close">取消</el-button>
    </div>
  </el-dialog>
</template>
<script>
// import { getStorage } from '@/utils/store';
// import { PostData } from '@/api/fetchdata';
export default {
  data() {
    return {
      // token: getStorage('token'),
      // uid: getStorage('uid'),
      changeUnit: true,
      tableLoading: false,
      selectlist: [], // 选中的数据
      selectlistCopy: [],
      keywords: '', // 材料信息
      supplier: '', // 供应商id
      supplierChange: false,
      supplierOptions: [{
          value: '',
          label: '全部'}
      ],
      tableData: [],
      newObj: {}
    }
  },
  props: ['ProjectObj'],
  methods: {
    // 
    // 清空历史数据
    clear() {
      this.selectlist = [];
      this.selectlistCopy = [];
      this.tableData = [];
      this.newObj = {};
      this.keywords = '';
      this.supplier = '';
    },
    init() {
      this.tableData = [];
      this.changeUnit = true;
      this.selectlistCopy = this.selectlist
      this.tableLoading = true;
      // 是否展示最外层全选按钮
      if(this.supplier != '') {
        this.supplierChange = true;
      } else {
        this.supplierChange = false;
      }
      return PostData({
        service: 'Enterprise.ProjectSumResource.GetPrjProductsList',
        uid: this.uid,
        token: this.token,
        device_source: 'web',
        project_id: this.ProjectObj.project_id,
        keywords: this.keywords,
        supplier_eid: this.supplier
      }).then((res) => {
        if (res.data.ret === 200) {
          this.resetData(res.data.data, 1, '');
          // 如果存在已选的项目，或者带过来的项目
          this.$nextTick(() => {
            if(this.selectlistCopy.length > 0) {
              let SelectArr = [];
              this.tableData.map(item => {
                this.selectlistCopy.map(itemB => {
                  if (itemB.sku_id == item.sku_id) {
                    SelectArr.push(item);
                  }
                })
              })
              SelectArr.map(item => {
                if(item.manufacturer) {
                  this.$refs.addMaterialScienceTab.toggleRowSelection(item, true);
                }
              })
              // 如果搜索之后选中数据匹配结果小于一说明当前搜索的是其他供应商内容，禁用全选勾选功能
              if(SelectArr.length < 1 || this.supplier == '') {
                this.supplierChange = false;
              } else {
                this.supplierChange = true;
              }
              // 如果不是在全部供应商页面，，并且在选中的供应商页，当前子集全选时，选中对应的父级
              if(this.supplier == this.selectlistCopy[0].supplier_eid) {
                this.SelectChild(this.selectlist);
              }
            }
          })
        } else {
          this.$message({
            message: res.data.msg,
            type: 'warning',
          });
        }
        this.tableLoading = false;
      }).catch((error) => {
        this.tableLoading = false;
        console.log(error);
      });
    },
    // 隐藏全选
    cellClass(row) {
      if (row.columnIndex === 1 && this.supplierChange == false) {
        return 'disableselection'
      }
    },
    //复选框禁用
    checkboxDis(row, rowIndex){
      if(row.disableSelect == true){
        return false;//禁用
      }else{
        return true;//不禁用
      }
    },
    getArrDifference(arr1, arr2) {
      return arr1.concat(arr2).filter(function(v, i, arr) {
          return arr.indexOf(v) === arr.lastIndexOf(v);
      });
    },
    // 点击选择框
    tableSelectChange(selection, row) {
      // 如果选中的是父级
      // 选中状态 true:选中， 0|false 取消
      let selected = selection.length && selection.indexOf(row) !== -1
      let selectdata = {row: row};
      if(selected) {
        console.log('22222')
        selectdata.state = 'Select'
      } else {
        console.log('1111111')
        selectdata.state = 'Cancel'
      }
      // if(!row.manufacturer) {
        
      // }
      // 选中实际的商品
      this.SelectChild(selection, selectdata);
      // 记录选中的数据，搜索后保留禁用
      this.selectlist = selection;
      if(selection.length > 0 && this.supplierChange == true) {
        console.log(selection, 'selection--------')
        // 选中之后禁用其它不同的供应商
        this.tableData.forEach(item => {
          if(item.manufacturer && (item.manufacturer != selection[0].manufacturer)) {
            item.disableSelect = true;
          }
        })
      } else {
        // 选中数量小于1时打开对不同供应商商品的禁用
        this.tableData.forEach(item => {
          if(item.manufacturer && item.manufacturer != '') {
            item.disableSelect = false;
          }
        })
      }
    },
    // 选中子级
    SelectChild(selection, selectdata) {
      // 循环当前选中的所有值，根据levelnum得到所属父级,数组的key为父级levelnum
      let checkedObj = {};
      selection.map(item => {
        if (JSON.stringify(checkedObj) =="{}") {
          if(item.levelnum.length>2) {
            checkedObj[item.levelnum.substring(0, item.levelnum.length - 2)] = [item];
          }
        } else {
          for (let key in checkedObj) {
            if(item.levelnum.length > 2) {
              if(key == item.levelnum.substring(0, item.levelnum.length - 2)) {
                checkedObj[key].push(item)
              } else if(key != item.levelnum.substring(0, item.levelnum.length - 2)) {
                checkedObj[item.levelnum.substring(0, item.levelnum.length - 2)] = [item]
              }
            }
          }
        }
      })
      let newSelection = [];
      for (let key in checkedObj) {
        // 这里对比的时选中数据的父级
        this.tableData.map(item => {
          if(item.levelnum == key) {
            // 被选中行同级的数量与对应的选中值数量做对比，如果值一样，选中其父级，并将父级填充到新的selection中做递归
            if((item.children.length == checkedObj[key].length)) {
              this.$refs.addMaterialScienceTab.toggleRowSelection(item, true);
              newSelection.push(item)
            }
          }
        })
      }
      // 如果是取消操作
      if(selectdata && selectdata.state == 'Cancel') {
        // 得到取消行的levelnum
        let cancelLevelnum = selectdata.row.levelnum;
        // 关闭子集及自身
        this.closeTab(cancelLevelnum);
        // 关闭父级
        this.closeParent(cancelLevelnum)
      }
      // 如果是选中操作并且选中的是父级
      if(selectdata && selectdata.state == 'Select' && !selectdata.row.sku_id) {
        this.SelectParent(selectdata.row.levelnum)
      }
      if(newSelection.length > 0) {
        this.SelectChild(newSelection);
      }
    },
    closeTab(cancelLevelnum){
      this.tableData.map(item => {
        if(item.levelnum == cancelLevelnum) {
          // 关闭自身
          this.$refs.addMaterialScienceTab.toggleRowSelection(item, false);
          // 找到selectlist内对应的数据，删除
          this.selectlist.map((selectListItem, index) => {
            if(item.levelnum == selectListItem.levelnum) {
              this.selectlist.splice(index, 1);
            }
          })
          if(item.children && (item.children.length > 0)) {
            // 向下找, 关闭所有子集
            item.children.map(item => {
              this.closeTab(item.levelnum);
            })
          }
        }
      })
    },
    closeParent(levelnum) {
      this.tableData.map(item => {
        if(item.levelnum == levelnum) {
          this.$refs.addMaterialScienceTab.toggleRowSelection(item, false);
          this.selectlist.map((selectListItem, index) => {
            if(item.levelnum == selectListItem.levelnum) {
              this.selectlist.splice(index, 1);
            }
          })
          if(item.levelnum.length > 2) {
            this.closeParent(item.levelnum.substring(0, item.levelnum.length - 2))
          }
        }
      })
    },
    // 选中父级
    SelectParent(levelnum) {
      this.tableData.map(item => {
        if(item.levelnum == levelnum) {
          if(this.selectlist.toString().indexOf(item.toString()) < 0) {
            this.selectlist.push(item)
          }
          if(item.children && item.children.length > 0) {
            item.children.map(childrenItem => {
              this.$refs.addMaterialScienceTab.toggleRowSelection(childrenItem, true);
              console.log(childrenItem, 'childrenItem---------')
              // 将勾选的数据插入到selectlist内
              if(this.selectlist.toString().indexOf(childrenItem.toString()) < 0) {
                this.selectlist.push(childrenItem)
              }
              if(childrenItem.children && childrenItem.children.length > 0) {
                this.SelectParent(childrenItem.levelnum)
              }
            })
          }
        }
      })
    },
    tableSelectAllChange(val) {
      console.log(val, 'val------------')
    },
    // 处理展示数据
    resetData(data, level, levelnum){
      data.map((item,index) => {
        item.level = level; // 当前行层级
        item.levelnum = levelnum + ((levelnum==''?'':'.') + (index+1)); // 记录所属关系
        item.child = item.children ? item.children.length : ''; // 是否存在子集
        item.open = (item.child == 1 ? true : false); // 默认为打开状态
        // 默认禁用掉多选，只有在搜索供应商之后打开
        if(item.children && this.supplier == '') {
          item.disableSelect = true;
        }
        // 获取供应商列表
        if(item.manufacturer) {
          let obj={
            value: item.supplier_eid,
            label: item.manufacturer
          }
          let flag = true;
          this.supplierOptions.map(itemB => {
            if(itemB.value == obj.value) {
              flag = false;
            }
          })
          if(flag) {
            this.supplierOptions.push(obj)
          }
        }
        // 如果存在选中或者带过来的供应商id不匹配禁用不匹配的供应商
        if(this.selectlistCopy.length > 0) {
          if((this.supplier != this.selectlistCopy[0].supplier_eid) && (item.supplier_eid !== this.selectlistCopy[0].supplier_eid)) {
            item.disableSelect = true;
          }
        }
        this.tableData.push(item)
        if(item.children) {
          this.resetData(item.children, (Number(level) + 1), item.levelnum);
        }
      })
    },
    // 记录数组对比
    isContainArray(a, b) {
      if (a.length <= b.length) return false;
      for (var i = 0, len = b.length; i < len; i++) {
        if(a[i] !== b[i]) return false;
      }
      return true;
    },
    // 点击展开/折叠子集
    handleOpen(scope) {
      // 更新按钮样式
      var clickIndex = scope.$index;
      this.tableData[clickIndex].open = !this.tableData[clickIndex].open;
      // 收集选中的需要打开关闭的行
      var array1 = this.tableData[clickIndex].levelnum.split('.');
      let tbRows = document
          .getElementById('l_add_material_table_id')
          .getElementsByTagName('tbody')[0].rows;
      // 开始隐藏
      if(scope.row.open == false) {
        let hideArr = [];
        this.tableData.map((item, index) =>{
          let array2 = item.levelnum.split('.');
          if(this.isContainArray(array2, array1)) {
            hideArr.push(index)
          }
        })
        // 设置匹配行样式
        for (var i = 0; i < tbRows.length; i++) {
          if (hideArr.indexOf(i) !== -1) {
            tbRows[i].style.display = 'none';
          }
        }
      } else {
        // 展开
        var rowTohide = [];
        for (var i = 0; i < this.tableData.length; i++) {
          let array2 = this.tableData[i].levelnum.split('.');
          if ( this.isContainArray(array2, array1) ) {
            rowTohide.push(i);
          }
        }
        for (var i = 0; i < tbRows.length; i++) {
          if (rowTohide.indexOf(i) !== -1) {
            //其父族中如果有一个状态为不显示，则不显示
            var flag = true;
            let array3=this.tableData[i].levelnum.split('.');
            for (var j = 0; j < this.tableData.length; j++) {
              let array2 = this.tableData[j].levelnum.split('.');
              if ( this.isContainArray(array3, array2) ) {
                if (this.tableData[j].open == false) {
                  flag = false;
                  break;
                }
              }
            }
            if (flag) {
              tbRows[i].style.display = '';
            }
          }
        }
      }
    },
    // 关闭
    close() {
      this.changeUnit = false;
      this.clear();
    },
  }
}
</script>