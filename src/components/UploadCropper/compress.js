/**
 * 将图片压缩为对应尺寸
 * @param {Object} options
 * @param {String} options.img 图片的url或者base64数据
 * @param {Number} options.width 目标图片的宽度
 * @param {Number} options.height 目标图片的高度
 * @param {Number} options.quality 生成目标图片质量
 * @param {String} options.fit 图片压缩填充模式默认 scale：按比例缩放，可选 fill：按使用目标尺寸
 * @param {String} options.type 图片压缩类型默认 jpg，可选 png
 * @param {String} options.fillColor 在jpeg格式下，留白区域的填充色
 * @returns {Promise} then {width,height,img}
 */
import moment from 'moment'
function pictureCompress (options) {
  return new Promise((resolve, reject) => {
    if (!options.img) {
      reject(new Error('need img'))
      return
    }
    let imgSrc = options.img
    let width = options.width || 640
    let height = options.height || 1000
    let type = options.type || 'jpg'
    let quality = options.quality || 0.92
    let fillColor = options.fillColor || '#fff'
    let fit = options.fit || 'scale'
    let watermark = options.iswatermark !== false // 试乘试驾加水印
    let fileSize = options.fileSize > 0 ? options.fileSize : false // 限制图片大小
    let cutNum = 0.1
    // let finalRes = null
    if (width <= 0 || height <= 0) {
      reject(new Error('dist width or height need > 0'))
      return
    }
    if (!/jpg|png|jpeg/.test(type)) {
      reject(new Error('type need jpg or png!'))
      return
    }
    let image = new Image()
    image.src = imgSrc
    image.onload = function () {
      let distSize = getDistSize(
        {
          width: this.naturalWidth,
          height: this.naturalHeight
        },
        {
          width: width,
          height: height
        },
        fit
      )
      let imgData = ''
      if (fileSize > 0) {
        imgData = compress(this, distSize.width, distSize.height, type, fillColor, 0.98, watermark)
        let task = async () => {
          imgData = await compress(this, distSize.width, distSize.height, type, fillColor, quality, watermark)
        }
        while (showSize(imgData) > fileSize) {
          // 如果文件大小不合适，则一直压缩到500k以内
          if (quality <= cutNum) {
            cutNum = cutNum / 10
          }
          quality = (quality * 100 - cutNum * 20) / 100
          task()
        }
        console.log(imgData, 'imgData')
        resolve({
          ...distSize,
          img: imgData
        })
      } else {
        imgData = compress(this, distSize.width, distSize.height, type, fillColor, quality, watermark)
        resolve({
          ...distSize,
          img: imgData
        })
      }
    }
    image.onerror = function (err) {
      reject(err)
    }
  })
}
/**
 * 将图片转换为固定尺寸的
 * @param {Image} img 图片数据
 * @param {Number} width 转换之后的图片宽度
 * @param {Number} height 转换之后的图片高度
 * @param {String} type base64的图片类型 jpg png
 * @param {String} fillColor 填充颜色
 * @param {Number} quality 转换之后的图片质量
 */
function compress (img, width, height, type, fillColor, quality, watermark) {
  var canvas = document.createElement('canvas')
  var ctx = canvas.getContext('2d')
  let types = {
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    png: 'image/png'
  }
  canvas.width = width
  canvas.height = height
  // 非 png 图片留白区域背景颜色填充
  if (type !== 'png') {
    ctx.fillStyle = fillColor
    ctx.fillRect(0, 0, width, height)
  }
  ctx.drawImage(img, 0, 0, width, height)
  if (watermark) {
    for (let i = 0; i < 10; i++) {
      ctx.rotate((-45 * Math.PI) / 180) // 水印初始偏转角度
      ctx.font = '40px microsoft yahei'
      ctx.fillStyle = 'rgba(255,255,255,0.5)'
      ctx.fillText(`仅试乘试驾${moment().format('YYYY-MM-DD')}有效`, -150, i * 200)
      ctx.rotate((45 * Math.PI) / 180) // 把水印偏转角度调整为原来的，不然他会一直转
    }
  }
  return canvas.toDataURL(types[type], quality)
}
/**
 * 选择源尺寸与目标尺寸比例中较小的那个，保证图片可以完全显示
 * 最大值不超过1，如果图片源尺寸小于目标尺寸，则不做处理，返回图片原尺寸
 * @param {Object} source 源图片的宽高
 * @param {Object} dist 目标图片的宽高
 */
function getDistSize (source, dist, fit) {
  if (fit === 'fill') return dist
  let scale = Math.min(dist.width / source.width, dist.height / source.height, 1)
  return {
    width: Math.round(source.width * scale),
    height: Math.round(source.height * scale)
  }
}
function showSize (base64url) {
  // 把头部去掉
  var str = base64url.replace('data:image/png;base64,', '')
  // 找到等号，把等号也去掉
  var equalIndex = str.indexOf('=')
  if (str.indexOf('=') > 0) {
    str = str.substring(0, equalIndex)
  }
  // 原来的字符流大小，单位为字节
  var strLength = str.length
  // 计算后得到的文件流大小，单位为字节
  var fileLength = parseInt(strLength - (strLength / 8) * 2)
  // 由字节转换为kb
  var size = ''
  size = (fileLength / 1024).toFixed(2)
  var sizeStr = size + '' // 转成字符串
  var index = sizeStr.indexOf('.') // 获取小数点处的索引
  var dou = sizeStr.substr(index + 1, 2) // 获取小数点后两位的值
  if (dou === '00') {
    // 判断后两位是否为00，如果是则删除00
    return sizeStr.substring(0, index) + sizeStr.substr(index + 3, 2)
  }
  return size
}
export default pictureCompress
