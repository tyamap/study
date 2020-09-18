<template>
  <div>
    <h1>User No. {{ id }}</h1>
    <router-link :to="/users/+ (Number(id) + 1)">Next User</router-link>
    <div>
      <router-link :to="'/users/' + id + '/posts'" class="link">posts</router-link>
      <router-link :to="'/users/' + id + '/profile'" class="link">profile</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  props: ["id"]
}
</script>