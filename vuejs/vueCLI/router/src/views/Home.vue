<template>
  <div>
    <h1>Home</h1>
    <button @click="toUsers">User一覧</button>
    <p>{{ count }}</p>
  </div>
</template>

<script>
export default {
  computed:{
    count(){
      return this.$store.state.count
    }
  },
  methods:{
    toUsers(){
      this.$router.push({path: 'users'});
    }
  }
}
</script>