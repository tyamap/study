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
import { mapGetters } from "vuex";

export default {
  computed:{
    ...mapGetters(["getCount", "doubleCount", "tripleCount"])
  },
  methods:{
    toUsers(){
      this.$router.push({path: 'users'});
    }
  },
}
</script>