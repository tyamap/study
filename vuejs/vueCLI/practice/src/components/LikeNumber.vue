<template>
  <div>
    <p>いいね({{ number }})</p>
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
    }
  },
  methods: {
    increment(){
    }
  }
}
</script>
