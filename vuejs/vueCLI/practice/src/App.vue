<template>
  <div>
    <LikeHeader></LikeHeader>
    <h2>{{number}}</h2>
    <LikeNumber :number="number" @my-click="number = $event"></LikeNumber>
    <LikeNumber :number="number"></LikeNumber>
  </div>
</template>

<script>
import LikeHeader from './components/LikeHeader.vue'

export default{
  data: function () {
    return {
      number: 14
    }
  },
  // コンポーネントのローカル登録
  components: {
    LikeHeader
  }
}
</script>
