<template>
  <div>
    <p>いいね({{ number / 2 }})</p>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
export default {
  props: {
    number: Number
  },
  methods: {
    increment(){
      this.number += 1
    }
  }
}
</script>
