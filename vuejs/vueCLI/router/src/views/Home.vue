<template>
  <div>
    <h1>Home</h1>
    <button @click="toUsers">User一覧</button>
  </div>
</template>

<script>
export default {
  methods:{
    toUsers(){
      this.$router.push({path: 'users'});
    }
  }
}
</script>