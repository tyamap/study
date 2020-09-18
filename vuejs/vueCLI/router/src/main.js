import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  // ユーザー認証チェックなど
  // if (hoge === null) {
  //   next("/");
  // }
  next();
})

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
