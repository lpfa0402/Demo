import ajax from './ajax'
// 定义请求地址
const BASE_URL = '/api' // index 中配置的代理会将/api替换为请求地址
// POST 请求
export const reqPost = params => ajax(BASE_URL + '/post', {params}, 'POST')

// GIT请求
export const reqGit = () => ajax(BASE_URL + '/git', {})
