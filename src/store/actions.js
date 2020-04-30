// 接收组件通知触发mutations调用间接更新状态方法的对象
// 引入mutation-types内定义的常量用于和mutation进行通信
import {TX_DATA} from './mutation-types'
export default{
  shijian ({commit}, shuju) {
    // 将数据给常量传递
    commit(TX_DATA, {shuju})
  }
}
