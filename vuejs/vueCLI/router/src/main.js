import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  // ユーザー認証チェックなど
  // if (hoge === null) {
  //   next("/");
  // }
  next();
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
