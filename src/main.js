//入口文件
import Vue from 'vue'

import { Header } from 'mint-ui'
import 'mint-ui/lib/style.css'

import './lib/mui/css/mui.min.css'

Vue.component(Header.name,Header) 


import app from "./app.vue"


new Vue({
  el: '#app',
  data:{},
  render:c=>c(app)
})