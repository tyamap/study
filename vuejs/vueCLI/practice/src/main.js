import Vue from 'vue'
import App from './App.vue'
import LikeNumber from './components/LikeNumber.vue'

Vue.config.productionTip = false
// コンポーネントのグローバル登録
Vue.component('LikeNumber', LikeNumber)

// フィルター
Vue.filter("upperCase", function (value) {
  return value.toUpperCase();
})

new Vue({
  render: h => h(App),
}).$mount('#app')
