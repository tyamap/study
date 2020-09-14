<template>
  <div>
    <h1>レベル別グラフ</h1>
    <Chart></Chart>
  </div>
</template>

<script>
import Chart from './LevelsChart';

export default {
  components: {
    Chart,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
div {
  margin: 0 10%;
  width: 80%;
  height: 80%;
}
</style>
