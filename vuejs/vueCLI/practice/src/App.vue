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
    <div>
      <h2>イベントのフォーム</h2>
      <label for="title">タイトル</label>
      <input id="title" type="text" v-model.lazy="eventData.title">
      <br>
      <label for="maxNumber">最大人数</label>
      <input id="maxNumber" type="number" v-model.number="eventData.maxNumber">
      <br>
      <label for="host">主催者</label>
      <input id="host" type="text" v-model.trim="eventData.host">
      <br>
      <label for="detail">内容</label>
      <textarea id="detail" type="text" v-model.trim="eventData.detail"></textarea>
      <br>
      <input id="isPrivate" type="checkbox" v-model="eventData.isPrivate">
      <label for="isPrivate">非公開</label>
      <p>参加条件</p>
      <input type="checkbox" id="10" value="10代" v-model="eventData.target"><label for="10">10代</label>
      <input type="checkbox" id="20" value="20代" v-model="eventData.target"><label for="20">20代</label>
      <input type="checkbox" id="30" value="30代" v-model="eventData.target"><label for="30">30代</label>
      <p>参加費</p>
      <input type="radio" id="free" value="無料" v-model="eventData.price">
      <label for="free">無料</label>
      <input type="radio" id="paid" value="有料" v-model="eventData.price">
      <label for="paid">有料</label>
      <p>開催場所</p>
      <select v-model="eventData.location">
        <option v-for="location in locations" :key="location">{{ location }}</option>
      </select>
      <p>{{ eventData }}</p>
    </div>
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
      currentComponent: "Home",
      locations: ["東京", "大阪", "名古屋"],
      eventData: {
        title: "",
        maxNumber: 0,
        host: "",
        detail: "",
        isPrivate: false,
        target: [],
        price: "無料",
        location: "東京"
      }
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
