<template>
  <div style="width: 700px; margin: auto; padding-top: 50px;">
    <nav>
      <router-link
        to="/"
        class="link"
        active-class="link--active"
        exact
        >Home</router-link>
      <router-link
        to="/users" 
        class="link"
        active-class="link--active"
        exact
        >Users</router-link>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods:{
    increment() {
      this.$store.commit('increment', 1);
    },
    decrement() {
      this.$store.commit('decrement', 1);
    }
  }
}
</script>

<style>
  .link {
    margin-right: 10px;
  }
  .link--active{
    font-size: 20px;
  }
</style>