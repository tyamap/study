<template>
  <div>
    <p v-border:solid.shadow.round="{width: '5px', color: 'red'}">Home</p>
    <h2>{{ title | upperCase}}</h2>
    <p>{{ subTitle | lowerCase }}</p>
    <CountNumber></CountNumber>
  </div>
</template>

<script>
import CountNumber from './CountNumber.vue'
import {tokyoTitle} from "@/tokyoTitle";

export default {
  mixins: [tokyoTitle],
  directives: {
    border (el, binding) {
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
    }
  },
  components:{
    CountNumber
  }
}
</script>