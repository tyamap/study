<template>
  <div>
    <p>いいね({{ number / 2 }})</p>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
export default {
  props: {
    number: {
      // propsのバリデーション
      type: Number,
      required: true,
      // default: 10,
    }
  },
  methods: {
    increment(){
      this.number += 1
    }
  }
}
</script>
