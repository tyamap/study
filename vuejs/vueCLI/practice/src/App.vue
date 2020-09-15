<template>
  <div>
    <LikeHeader></LikeHeader>
    <LikeNumber :number="number"></LikeNumber>
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
