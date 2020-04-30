export default {
  data: [
    {
      type: 'INPUT',
      label: '搜索',
      fieldName: 'title',
      placeholder: '请输入标题名称...',
      initialValue: '',
      style: { width: '200px' },
      rules: [{ required: true, message: '请输入标题名称', trigger: 'blur' }, { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }]
    },
    {
      type: 'SELECT',
      label: '所属分类',
      fieldName: 'cid',
      placeholder: '所属分类',
      itemList: [{ text: '热点', value: '1' }, { text: '资讯', value: '2' }],
      rules: [{ required: true, message: '请选择所属分类', trigger: 'change' }]
    },
    {
      type: 'UPLOAD_IMG',
      label: '上传身份证',
      fieldName: 'wayPicture',
      placeholder: '上传身份证...',
      rules: [
        { required: true, message: '请上传身份证', trigger: 'change' },
        { limit: 2, validator: this.validateFn, message: '请上传两张图片', trigger: 'change' }
      ],
      upload: {
        actionUrl: '/api/file/oss/upload',
        fixedSize: [5, 3],
        limit: 2,
        isCalcHeight: true
      }
    },
    {
      type: 'UPLOAD_FILE',
      label: '上传文件',
      fieldName: 'wayFiles',
      placeholder: '上传文件...',
      rules: [{ required: true, message: '请上传文件', trigger: 'change' }],
      initialValue: [{ name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }],
      upload: {
        actionUrl: '/api/file/oss/upload',
        limit: 2,
        fileTypes: ['jpg', 'png']
      }
    }
  ]
}
