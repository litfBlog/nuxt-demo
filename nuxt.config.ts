import { defineNuxtConfig } from 'nuxt'
const lifecycle = process.env.npm_lifecycle_event;

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  meta: {
    title: '我的主页',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '我的主页' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'https://www.litf.com.cn/favicon.ico' }
    ]
  },
  css: ['assets/style/main.less'],
  // build
  build: {
    transpile: lifecycle === "build" ? ["element-plus"] : [],
  },
  // build modules
  buildModules: [
    'dayjs'
  ],
})
