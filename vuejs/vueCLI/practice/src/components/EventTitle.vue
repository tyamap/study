<template>
  <div>
    <label for="title">タイトル</label>
    <input 
      id="title"
      type="text"
      :value="value"
      @change="$emit('input', $event.target.value)"
    >
  </div>
</template>

<script>
export default {
  props: [
    "value"
  ]
}
</script>