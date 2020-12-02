import Vue from 'vue'
import VueI18n from 'vue-i18n'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import ElementLocale from 'element-ui/lib/locale'

Vue.use(VueI18n)

// 准备翻译的语言环境信息
const messages = {
    en: {
        message: {
            project: "project",
            params: "params",
            content: "content"
        },
        ...enLocale
    },
    zh: {
        message: {
            project: "商品管理",
            params: "规格参数",
            content: "广告分类管理"
        },
        ...zhLocale
    }
  }
  ElementLocale.i18n((key, value) => i18n.t(key, value))

  // 通过选项创建 VueI18n 实例
const i18n = new VueI18n({
    locale: 'zh', // 设置地区
    messages, // 设置地区信息
  })

  export default i18n