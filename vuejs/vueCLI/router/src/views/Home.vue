<template>
  <div>
    <h1>Home</h1>
    <button @click="toUsers">User一覧</button>
    <p>{{ count }}</p>
    <p>{{ doubleCount }}</p>
    <p>{{ tripleCount }}</p>
  </div>
</template>

<script>
export default {
  computed:{
    count(){
      return this.$store.state.count
    },
    doubleCount(){
      return this.$store.getters.doubleCount
    },
    tripleCount(){
      return this.$store.getters.tripleCount
    }
  },
  methods:{
    toUsers(){
      this.$router.push({path: 'users'});
    }
  },
}
</script>