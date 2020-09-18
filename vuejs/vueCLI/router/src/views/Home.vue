<template>
  <div>
    <h1>Home</h1>
    <button @click="toUsers">User一覧</button>
    <p>{{ getCount }}</p>
    <p>{{ doubleCount }}</p>
    <p>{{ tripleCount }}</p>
    <input type="text" v-model="message">
    <p>{{message}}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed:{
    ...mapGetters(["getCount", "doubleCount", "tripleCount"]),
    message: {
      get(){
        return this.$store.getters.getMessage;
      },
      set(value){
        this.$store.dispatch("updateMessage", value)
      }
    }
  },
  methods:{
    toUsers(){
      this.$router.push({path: 'users'});
    }
  },
}
</script>