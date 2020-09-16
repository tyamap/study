<template>
  <div>
    <LikeHeader>
      <h2>はじめまして</h2>
    </LikeHeader>
    <h2>{{number}}</h2>
    <LikeNumber :number="number"></LikeNumber>
    <button @click="currentComponent = 'Home'">Home</button>
    <button @click="currentComponent = 'About'">About</button>
    <keep-alive><!-- 動的コンポーネント切り替え時にdestroy()を発火させない -->
      <component :is="currentComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
import LikeHeader from './components/LikeHeader.vue';
import About from './components/About.vue';
import Home from './components/Home.vue';

export default{
  data: function () {
    return {
      number: 14,
      currentComponent: "Home"
    }
  },
  // コンポーネントのローカル登録
  components: {
    LikeHeader,
    Home,
    About,
  }
}
</script>
