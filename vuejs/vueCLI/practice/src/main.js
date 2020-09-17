import Vue from 'vue'
import App from './App.vue'
import LikeNumber from './components/LikeNumber.vue'

Vue.config.productionTip = false
// コンポーネントのグローバル登録
Vue.component('LikeNumber', LikeNumber)

// カスタムディレクティブ v-border
Vue.directive("border", function (el, binding) {
  // bindとupdateフックに適用される
  el.style.border = 'solid black 2px'; // DOM要素に対する操作
  el.style.borderWidth = binding.value.width; // 属性値を受け取る
  el.style.borderColor = binding.value.color;
  el.style.borderStyle = binding.arg; // 引数を受け取る
  if (binding.modifiers.round) {
    el.style.borderRadius = '0.5rem';
  }
  if (binding.modifiers.shadow) {
    el.style.boxShadow = '0.2px 5px rgba(0, 0, 0, 0.26)';
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
