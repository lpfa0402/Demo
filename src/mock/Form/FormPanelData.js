import Mock from 'mockjs'

Mock.mock('http://123.com', { // 返回一个json对象
  'name|3': 'fei',
  'age|20-30': 25
})
