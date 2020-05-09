/**
 * 全局引用
 * 全局组件的注册
 */
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import LazyLoadTabs from '@/components/LazyLoadTabs'
import AjaxButton from '@/components/Button/AjaxButton'
import BaseDialog from '@/components/BaseDialog'
import Anchor from '@/components/Anchor'
import FormPanel from '@/components/FormPanel'
import UploadCropper from '@/components/UploadCropper'
import UploadFile from '@/components/UploadFile'
import BreakSpace from '@/components/BreakSpace'
import Tinymce from '@/components/Tinymce'
import JsonToExcel from '@/components/JsonToExcel'
Vue.use(ElementUI, { size: 'small', zIndex: 1000 })

// 注册全局组件
Vue.use(LazyLoadTabs)
Vue.use(AjaxButton)
Vue.use(BaseDialog)
Vue.use(Anchor)
Vue.use(FormPanel)
Vue.use(UploadCropper)
Vue.use(UploadFile)
Vue.use(BreakSpace)
Vue.use(Tinymce)
Vue.use(JsonToExcel)
