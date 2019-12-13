import Vue from 'vue'
import App from './pages/layout.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import VueRouterConfig from './route/router.config'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(VueResource);

Vue.config.productionTip = false
//使用路由
let router = new VueRouter(VueRouterConfig)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
