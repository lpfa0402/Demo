// ajax请求函数模块
// 返回值是一个promise对象（异步返回的数据是 response.data）

// 引入axios
import axios from 'axios'
import {Message} from 'element-ui'
// 向外默认暴露一个函数ajax
export default function ajax (url, data = {}, type = 'GET') {
  // 读取token
  // const token = window.localStorage.getItem('token') || '[]'
  // 最终返回一个包含resolve, reject函数的promise对象
  return new Promise(function (resolve, reject) {
    // 执行异步ajax请求
    // 声明一个promise对象来放置返回值
    let promise
    // 如果是get请求奖请求参数拼接到请求地址中
    // let loadingInstance = Loading.service({
    //   fullscreen: true,
    //   text: 'Loading.....',
    //   spinner: 'el-icon-loading'
    // })
    if (type === 'GET') {
      let dataStr = ''
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
      if (dataStr !== '') {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      // 拼串完毕发送get请求
      promise = axios.get(url, {
        // headers: {'Authorization': token}
      })
    } else {
      let FormData = false
      // 发送post请求
      for (var key in data) {
        if (typeof (data[key]) === 'object' && Object.getOwnPropertyNames(data).length === 1) {
          FormData = true
        } else {
          FormData = false
        }
      }
      if (FormData === true) {
        promise = axios.post(url, data[key], {
          // headers: {
          //   'Authorization': token
          // }
        })
      } else {
        promise = axios.post(url, data, {
          // headers: {
          //   'Authorization': token
          // }
        })
      }
    }
    promise
    // 请求成功调用resolve函数
      .then(response => {
        // loadingInstance.close()
        if (response.data.code === 700) {
          Message.error('登陆超时，请重新登录')
          location.href = '/'
        } else if (response.data.code === 900) {
          Message.error('您暂无操作权限')
        } else if (response.data.code === 1002) {
          Message.error(response.data.msg)
        } else if (response.data.code === 200 && response.data.token) {
          resolve(response.data)
          window.localStorage.setItem('token', response.data.token)
        } else {
          resolve(response.data)
        }
      })
      // 请求失败调用reject函数
      .catch(error => {
        // loadingInstance.close()
        reject(error)
      })
  })
}
