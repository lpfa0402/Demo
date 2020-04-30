// 由actions触发的直接更新状态方法的对象

// 引入mutation-types内定义的常量用于和mutation通信
import {TX_DATA} from './mutation-types'

export default {
  [TX_DATA] (state, {shuju}) {
    state.shuju = shuju
  }
}
