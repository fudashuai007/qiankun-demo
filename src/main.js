import Vue from 'vue'
import { registerMicroApps, start } from 'qiankun'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

const apps = [
  {
    name: 'childApp',
    entry: '//localhost:9000',
    container: '#micro-div',
    activeRule: '/childApp',
  },
  {
    name: 'childApp3',
    entry: '//localhost:9001',
    container: '#micro-div2',
    activeRule: '/childApp3',
  },
]

router.beforeEach((to,from,next)=>{
  if(to.matched.length===0){
    next('/')
  }
  else {
    next()
  }
})
registerMicroApps(apps)
start()

Vue.use(ElementUI)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
