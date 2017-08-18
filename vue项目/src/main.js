// src/main.js

import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import routes from './router.js'

//注册两个插件
Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter()

// 路由map
router.map(routes)
router.redirect({
  '*': '/Home'
})

router.start(App, '#app')