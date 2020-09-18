<template>
  <div>
    <h1>User No. {{ id }}</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  props: ["id"]
}
</script>